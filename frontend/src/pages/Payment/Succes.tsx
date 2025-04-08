import { useCart } from "@/context/CartProvider";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { checkoutService } from "@/services/Checkout.service";
import { commandService } from "@/services/Command.service";
import { useAuthContext } from "@/context/AuthProvider";
import Loader from "@/components/ui/loader";

function Succes() {
  const { resetCart } = useCart();
  const { user } = useAuthContext();
  const [products, setProducts] = useState<
    { id: string; reference: string; quantity: number }[] | null
  >(null);
  const params = useParams();
  const navigate = useNavigate();

  const { data: stripeSessionData } = useQuery({
    queryKey: ["stripeSession", params.sessionId],
    queryFn: async () => {
      const response = await checkoutService.retrieveCheckoutSession(
        params.sessionId
      );
      return response.data;
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });

  useEffect(() => {
    if (stripeSessionData) {
      const parsedProducts = stripeSessionData.result?.session?.products
        ? JSON.parse(stripeSessionData.result.session.products)
        : [];

      setProducts(parsedProducts);
      resetCart();
    }
  }, [stripeSessionData, resetCart]);

  const { data: commandData } = useQuery({
    queryKey: ["command", ""],
    queryFn: async () => {
      const response = await commandService.newCommand(user.id, products);
      return response;
    },
    enabled: !!products && !!user,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });

  if (!commandData) {
    return (
      <main className="container mx-auto">
        <Loader />
      </main>
    );
  }

  setTimeout(() => {
    navigate("/");
  }, 5000);

  return (
    <main className="container mx-auto">
      <h1 className="text-center text-xl font-bold">Merci d'avoir commander</h1>
    </main>
  );
}

export default Succes;

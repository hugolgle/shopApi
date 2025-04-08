import { useCart } from "@/context/CartProvider";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { checkoutService } from "@/services/Checkout.service";
import { commandService } from "@/services/Command.service";
import { useAuthContext } from "@/context/AuthProvider";
import Loader from "@/components/ui/loader";
import { CircleCheckBig } from "lucide-react";
import { ROUTES } from "@/components/Routes";
import { toast } from "sonner";

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
    }
  }, [stripeSessionData]);

  const { data: commandData, error } = useQuery({
    queryKey: ["command", ""],
    queryFn: async () => {
      const response = await commandService.newCommand(
        user!.id,
        products!,
        params.sessionId!
      );
      resetCart();
      return response;
    },
    enabled: !!products && !!user,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });

  useEffect(() => {
    if (error) {
      toast.error(
        "Une erreur est survenue lors de votre commande ! Merci de contacter notre support client."
      );
      navigate(ROUTES.HOME);
    }
  }, [error, navigate]);

  useEffect(() => {
    if (commandData) {
      toast.success("Commande reçue avec succès. Merci de votre visite !");
      setTimeout(() => {
        navigate(ROUTES.HOME);
      }, 1000);
    }
  }, [commandData, navigate]);

  if (!commandData && !error) {
    return (
      <main className="container mx-auto">
        <Loader />
      </main>
    );
  }

  return (
    <main className="container mx-auto mt-40">
      <CircleCheckBig
        className="text-green-400 text-center mx-auto"
        size={200}
      />
      <h1 className="text-center text-xl font-bold">Merci d'avoir commander</h1>
      <p className="text-center">Vous allez être rediriger</p>
    </main>
  );
}

export default Succes;

import { ROUTES } from "@/components/Routes";
import { CircleX } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function Cancel() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      toast.error(
        "Une erreur est survenue lors du paiement de votre commande ! Merci de réessayer plus tard ou encore contacter notre service client."
      );
      navigate(ROUTES.HOME);
    }, 1000);
  }, [navigate]);

  return (
    <main className="container mx-auto mt-40">
      <CircleX className="text-red-400 text-center mx-auto" size={200} />
      <h1 className="text-center text-xl font-bold">
        Une erreur est survenue lors de votre commande.
      </h1>
      <p className="text-center">Vous allez être rediriger</p>
    </main>
  );
}

export default Cancel;

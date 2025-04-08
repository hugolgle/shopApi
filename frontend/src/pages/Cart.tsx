import { ROUTES } from "@/components/Routes";
import { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartProvider";
import { CartItem } from "@/interface/cartItem.interface";
import { Trash } from "lucide-react";
import { PaymentTypes } from "@/interface/payment.interface";
import { paymentService } from "@/services/Payment.service";
import { useQuery } from "@tanstack/react-query";
import { useAuthContext } from "@/context/AuthProvider";
import { useNavigate } from "react-router-dom";
import Loader from "@/components/ui/loader";

function Cart() {
  const { isAuthenticated } = useAuthContext();
  const { cart, decreaseQuantity, increaseQuantity, removeFromCart } =
    useCart();
  const [cartItem, setCartItem] = useState<CartItem[]>([]);
  const [startPayment, setStartPayment] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    setCartItem(cart);
  }, [cart]);

  const proceedPayment = () => {
    if (cart.length > 0) {
      setStartPayment(true);
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["dataProducts", cart],
    queryFn: async () => {
      const dataProducts: PaymentTypes[] = cart.map((item: CartItem) => ({
        reference: item.reference,
        quantity: item.quantity,
      }));
      const response = await paymentService.createCheckout(dataProducts);
      return response?.data?.result;
    },
    enabled: startPayment,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });

  useEffect(() => {
    if (data) {
      window.location.href = data;
    }
  }, [data]);

  return (
    <section className="container mx-auto pt-10">
      <h1 className="text-2xl font-boldonse pl-4">Votre Panier</h1>
      <div className="flex flex-col md:flex-row justify-between p-4 w-full gap-10">
        <div className="w-full md:w-2/3">
          <div className="mt-4 flex flex-col gap-2">
            {cartItem.length > 0 ? (
              cartItem.map((item) => (
                <div
                  key={item.reference}
                  className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md"
                >
                  <div>
                    <h2 className="text-lg font-semibold">{item.reference}</h2>
                  </div>
                  <div className="flex flex-col">
                    <p>Quantité :</p>
                    <div className="flex items-center gap-4">
                      <Button
                        variant="secondary"
                        className="w-1/3"
                        onClick={() => decreaseQuantity(item)}
                      >
                        -
                      </Button>
                      <p className="w-1/3 text-center">{item.quantity}</p>
                      <Button
                        variant="secondary"
                        className="w-1/3"
                        onClick={() => increaseQuantity(item)}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                      <p>Total :</p>
                      <p>{(item.quantity * item.unit_price).toFixed(2)} €</p>
                    </div>
                    <Button
                      variant={"ghost"}
                      onClick={() => removeFromCart(item)}
                    >
                      <Trash className="text-red-500" />
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <p>
                  Votre panier est vide.{" "}
                  <Link
                    to={ROUTES.STORE}
                    className="underline underline-offset-4 text-blue-500"
                  >
                    Retourner à la boutique
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col gap-3">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-md font-medium font-boldonse">
              Récapitulatif de votre commande
            </h2>
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <p>Nombre d'article :</p>
                <p>{cartItem.length}</p>
              </div>

              <div className="flex justify-between items-center">
                <p>Total HT : </p>
                <p>
                  {cartItem.length > 0
                    ? (
                        cartItem.reduce(
                          (acc, item) => acc + item.unit_price * item.quantity,
                          0
                        ) / 1.2
                      ).toFixed(2)
                    : "0.00"}{" "}
                  €
                </p>
              </div>

              <div className="flex justify-between items-center">
                <p>Total TVA : </p>
                <p>
                  {cartItem.length > 0
                    ? (
                        (cartItem.reduce(
                          (acc, item) => acc + item.unit_price * item.quantity,
                          0
                        ) /
                          120) *
                        20
                      ).toFixed(2)
                    : "0.00"}{" "}
                  €
                </p>
              </div>

              <hr />
              <div className="flex justify-between items-center">
                <p>Total TTC : </p>
                <p>
                  {cartItem.length > 0
                    ? cartItem
                        .reduce(
                          (acc, next) => acc + next.unit_price * next.quantity,
                          0
                        )
                        .toFixed(2)
                    : "0.00"}{" "}
                  €
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            {isAuthenticated ? (
              <Button
                className="w-full"
                onClick={proceedPayment}
                disabled={isLoading}
              >
                {isLoading ? <Loader /> : "Passer la commande"}
              </Button>
            ) : (
              <Fragment>
                <p>
                  Vous n'êtes pas connecter ?{" "}
                  <Button variant={"link"} onClick={() => navigate("/login")}>
                    Se connecter
                  </Button>
                </p>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;

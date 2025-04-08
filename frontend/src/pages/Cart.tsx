import { ROUTES } from "@/components/Routes";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [cartItem, setCartItem] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedCart = sessionStorage.getItem("cart");
    if (storedCart) {
      setCartItem(JSON.parse(storedCart));
    }
  }, []);

  return (
    <main className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between p-4 w-full">
        <div className="w-full md:w-2/3">
          <h1 className="text-2xl font-boldonse">Votre Panier</h1>

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
                    <p>{item.quantity}</p>
                  </div>
                  <div className="flex flex-col">
                    <p>Total :</p>
                    <p>{item.price} €</p>
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
        <div className="bg-gray-100 p-4 rounded-lg w-full md:w-1/3">
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
              <p>{cartItem.length} €</p>
            </div>

            <div className="flex justify-between items-center">
              <p>Total TVA : </p>
              <p>{cartItem.length} €</p>
            </div>

            <hr />
            <div className="flex justify-between items-center">
              <p>Total TTC : </p>
              <p>{cartItem.length} €</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;

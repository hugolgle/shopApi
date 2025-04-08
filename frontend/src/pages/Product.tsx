import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";
import { useCart } from "@/context/CartProvider";
import { CartItem } from "@/interface/cartItem.interface";
import { productService } from "@/services/Product.service";
import { formatCurrency } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
  const { cart, addToCart, increaseQuantity, decreaseQuantity } = useCart();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams<{ id?: string }>();

  const { data, isLoading } = useQuery({
    queryKey: ["productsById", id ?? ""],
    queryFn: async () => {
      const response = await productService.getById(id ?? "");
      return response?.data?.result;
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });

  useEffect(() => {
    if (!data) return;

    const item = cart.find((item) => item.reference === data.reference);
    if (item) {
      setQuantity(item.quantity);
    } else {
      setQuantity(0);
    }
  }, [cart, data]);

  if (isLoading) {
    return <Loader />;
  }
  const handleAddToCart = () => {
    const item: CartItem = {
      reference: data.reference,
      quantity: 1,
      unit_price: data.price,
    };
    addToCart(item);
    setQuantity(1);
  };

  const handleIncreaseItem = () => {
    const item: CartItem = cart.find(
      (item) => item.reference === data.reference
    );
    if (item) {
      increaseQuantity(item);
    } else {
      handleAddToCart();
    }
  };

  const handleDecreaseItem = () => {
    const item: CartItem = cart.find(
      (item) => item.reference === data.reference
    );
    if (item) {
      decreaseQuantity(item);
    }
  };

  return (
    <section className="flex flex-col pt-10 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl mx-auto py-4">
        <div className="flex flex-col gap-4">
          <div className="bg-zinc-100 rounded-2xl flex justify-center">
            <img
              src={data?.imagePath}
              alt="product"
              className="aspect-square w-full max-w-xs sm:max-w-sm md:max-w-md object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-zinc-100 rounded-2xl flex justify-center hover:ring ring-blue-500 transition cursor-pointer">
              <img
                src={data?.imagePath}
                alt="product"
                className="aspect-square w-full max-w-[100px] object-cover"
              />
            </div>
            <div className="bg-zinc-100 rounded-2xl flex justify-center hover:ring ring-blue-500 transition cursor-pointer">
              <img
                src={data?.imagePath}
                alt="product"
                className="aspect-square w-full max-w-[100px] object-cover"
              />
            </div>
            <div className="bg-zinc-100 rounded-2xl flex justify-center hover:ring ring-blue-500 transition cursor-pointer">
              <img
                src={data?.imagePath}
                alt="product"
                className="aspect-square w-full max-w-[100px] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 py-4">
          <h1 className="text-2xl md:text-3xl font-boldonse">{data?.name}</h1>
          <p className="text-lg italic text-black font-black">
            {formatCurrency.format(Number(data?.price))}
          </p>
          <p className="text-sm">
            <span>Par </span>
            <a href="#" className="underline italic">
              {data?.brand}
            </a>
          </p>

          <p className="text-sm">#{data?.reference}</p>

          <p className="text-sm text-justify text-zinc-700">
            {data?.description}
          </p>
          <div className="flex gap-2">
            <div className="flex items-center w-fit gap-2">
              <Button
                variant="secondary"
                className="w-1/3"
                onClick={handleDecreaseItem}
              >
                -
              </Button>
              <p className="w-1/3 text-center">{quantity}</p>
              <Button
                variant="secondary"
                className="w-1/3"
                onClick={handleIncreaseItem}
              >
                +
              </Button>
            </div>
            <Button
              className="w-fit px-6 py-3"
              onClick={handleAddToCart}
              disabled={cart.find((item) => item.reference === data.reference)}
            >
              {cart.find((item) => item.reference === data.reference)
                ? "Déjà au panier"
                : "Ajouter au panier"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;

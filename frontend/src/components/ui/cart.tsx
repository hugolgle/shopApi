import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./button";

interface CartItem {
  reference: string;
  quantity: number;
}

function Cart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = sessionStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <ShoppingCart />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <DropdownMenuLabel className="w-96">Votre panier</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {cart.length > 0 ? (
          cart.map((item) => (
            <DropdownMenuItem key={item.reference}>
              <div className="flex gap-2">
                <span>{item.reference}</span>
                <span>x{item.quantity}</span>
              </div>
            </DropdownMenuItem>
          ))
        ) : (
          <DropdownMenuLabel>Votre panier est vide.</DropdownMenuLabel>
        )}
        <DropdownMenuLabel className="flex items-center justify-end gap-2">
          <Link to="/cart" className="w-full">
            <Button className="w-full">Voir le panier</Button>
          </Link>
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Cart;

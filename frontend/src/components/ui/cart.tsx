import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./button";
import { useCart } from "@/context/CartProvider";

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity } = useCart();

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
            <DropdownMenuLabel key={item.reference} className="w-full">
              <div className="flex items-center justify-between gap-2 w-full">
                <p>{item.reference}</p>
                <div className="flex items-center gap-2">
                  <Button
                    size={"sm"}
                    variant={"ghost"}
                    onClick={() => decreaseQuantity(item)}
                  >
                    -
                  </Button>
                  <p>x{item.quantity}</p>
                  <Button
                    size={"sm"}
                    variant={"ghost"}
                    onClick={() => increaseQuantity(item)}
                  >
                    +
                  </Button>
                </div>
                <div>
                  <p>{(item.quantity * item.unit_price).toFixed(2)} €</p>
                </div>
              </div>
            </DropdownMenuLabel>
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

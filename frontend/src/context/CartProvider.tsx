import React, { createContext, useContext, useState, useEffect } from "react";
import { CartItem } from "@/interface/cartItem.interface";

const CartContext = createContext<any>(null);

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Charger le panier du sessionStorage si disponible
  useEffect(() => {
    const storedCart = sessionStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Mettre à jour le panier dans sessionStorage et l'état local
  const updateCart = (newCart: CartItem[]) => {
    setCart(newCart);
    sessionStorage.setItem("cart", JSON.stringify(newCart));
  };

  // Ajouter un article au panier
  const addToCart = (item: CartItem) => {
    const existingItem = cart.find(
      (cartItem) => cartItem.reference === item.reference
    );
    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.reference === existingItem.reference
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      updateCart(updatedCart);
    } else {
      updateCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // Retirer un article du panier
  const removeFromCart = (item: CartItem) => {
    const updatedCart = cart.filter(
      (cartItem) => cartItem.reference !== item.reference
    );
    updateCart(updatedCart);
  };

  // Ajouter une quantité
  const increaseQuantity = (item: CartItem) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.reference === item.reference
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    updateCart(updatedCart);
  };

  // Retirer une quantité
  const decreaseQuantity = (item: CartItem) => {
    const updatedCart = cart
      .map((cartItem) =>
        cartItem.reference === item.reference
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
      .filter((cartItem) => cartItem.quantity > 0);
    updateCart(updatedCart);
  };

  // Réinitialisation du panier
  const resetCart = () => {
    updateCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

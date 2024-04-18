import { createContext, ReactNode, useEffect, useState } from "react";
import { Coffee } from "../pages/home/components/coffeeCard";
import { produce } from "immer";

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextData {
  cartItems: CartItem[];
  addCoffeeToCart: (coffee: CartItem) => void;
  cartQuantity: number;
  changeCartItemQuantity: (
    cartItemId: number,
    type: "increase" | "decrease"
  ) => void;

  removeCoffeeCart: (cartItemId: number) => void;
  cartItemTotal: number;
  cleanCart: () => void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCoffeeDelivery = localStorage.getItem("CoffeeDelivery");

    if (storedCoffeeDelivery) {
      return JSON.parse(storedCoffeeDelivery);
    }
    return [];
  });

  const cartQuantity = cartItems.length;

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id !== cartItem.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
      }
    });
    setCartItems(newCart);
  }

  const cartItemTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  function changeCartItemQuantity(
    cartItemId: number,
    type: "increase" | "decrease"
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsToCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );

      if (coffeeExistsToCart >= 0) {
        const item = draft[coffeeExistsToCart];
        draft[coffeeExistsToCart].quantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1;
      }
    });
    setCartItems(newCart);
  }

  function removeCoffeeCart(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsToCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );
      if (coffeeExistsToCart >= 0) {
        draft.splice(coffeeExistsToCart, 1);
      }
    });
    setCartItems(newCart);
  }

  useEffect(() => {
    localStorage.setItem("CoffeeDelivery", JSON.stringify(cartItems));
  }, [cartItems]);

  function cleanCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeeToCart,
        cartQuantity,
        changeCartItemQuantity,
        removeCoffeeCart,
        cartItemTotal,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

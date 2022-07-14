import { Dispatch, SetStateAction, useEffect, useState } from "react";
export interface CartItem {
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export default function createCart() {
  const initialState: CartItem[] = [];
  const [cart, setCart] = useState(initialState);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart"));

    if (cartData) {
      setCart(cartData);
    }
  }, []);

  useEffect(() => {
    handleTotal();

    if (cart !== initialState) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleAdd = (item: CartItem) => {
    const foundItem = cart.find((i) => i.name === item.name);

    if (foundItem) {
      handleChangeQuantity(item.name, foundItem.quantity + 1);
    } else {
      setCart([...cart, { ...item }]);
    }
  };

  const handleRemove = (name: string) => {
    const newCart = cart.filter((item) => item.name !== name);

    setCart(newCart);
  };

  const handleChangeQuantity = (name: string, quantity: number) => {
    const newCart = cart.map((item) => {
      if (item.name === name) {
        item.quantity = quantity;
      }

      return item;
    });

    setCart(newCart);
  };

  const handleClear = () => {
    setCart(initialState);
  };

  const handleTotal = () => {
    let total = 0;

    cart.forEach((item) => {
      total += item.price * item.quantity;
    });

    setTotal(total);
  };

  const getCart = () => {
    return {
      items: cart,
    }
  }

  return {
    cart,
    total,
    handleAdd,
    handleRemove,
    handleChangeQuantity,
    handleClear,
    getCart,
  };
}

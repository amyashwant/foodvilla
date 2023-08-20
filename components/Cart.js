import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearItem } from "./Utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearItem());
  };

  return (
    <>
      <div>
        <h1>cart items name added here below</h1>
      </div>

      {cartItems.map((cart) => {
        return (
          <ul key={cart}>
            <li>{cart}</li>
          </ul>
        );
      })}
      <button
        onClick={() => {
          handleClear();
        }}
      >
        clearCart
      </button>
    </>
  );
};

export default Cart;

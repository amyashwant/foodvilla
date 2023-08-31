import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { IMG_CDN_URL } from "../Constant";
import Shimmer from "./Shimmer";
import { useRestaurant } from "./Utils/useRestaurant";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./Utils/cartSlice";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);

  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const handleClick = (arg) => {
    dispatch(addItem(arg));
  };
  console.log(cartItems);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div>
      <div style={{ margin: "10px" }}>
        <h1>restaurant id {id}</h1>
        <h1>{restaurant.name}</h1>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h1>{restaurant.areaName}</h1>
        <h1>{restaurant.avgRating}</h1>
      </div>
      <div data-testid="menu">
        <button
          data-testid="add-btn"
          onClick={() => {
            handleClick(restaurant.name);
          }}
          style={{ margin: "20px", color: "green", backgroundColor: "white" }}
        >
          Add item
        </button>
      </div>
    </div>
  );
};
export default RestaurantMenu;

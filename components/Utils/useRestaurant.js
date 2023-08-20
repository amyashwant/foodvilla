import { MENU_URL } from "../../Constant";
import { useState,useEffect } from "react";
export const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    Apicall();
  }, []);

  async function Apicall() {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();

    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    // console.log(restaurant)
  }
  return restaurant
};

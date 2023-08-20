// import { useState, useEffect } from "react";
// import { SWIGGY_API_URL } from "../../Constant";

// export const useFetchRestaurant = () => {
//   let [allRestaurants, setAllRestaurants] = useState([]);
//   let [filteredRestaurants, setFilteredRestaurants] = useState([]);

//   useEffect(() => {
//     apicall();
//   }, []);

//   async function apicall() {
//     const data = await fetch(SWIGGY_API_URL);
//     const json = await data.json();

//     setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);

//     setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
//     console.log(json?.data?.cards[2]?.data?.data?.cards);
//   }
//   let filteredArray = [allRestaurants, filteredRestaurants];
//   return filteredArray;
// };

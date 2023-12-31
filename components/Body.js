import { RestaurantCard } from "./RestaurantCard";
import { restaurantList } from "../Constant";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { FilterData } from "./Utils/FilterData";
import { useFetchRestaurant } from "./Utils/useFetchRestaurant";
import { useOnline } from "./Utils/useOnline";
import UserContext from "./Utils/UserContext";

export const Body = () => {
  const { user, setUser } = useContext(UserContext);
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    apicall();
  }, []);

  async function apicall() {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    console.log(json?.data?.cards[2]);
    console.log(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    // setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(json?.data?.cards[2]?.data?.data?.cards);
  }

  // let allVallues = useFetchRestaurant;
  // console.log(allVallues());
  // const arr = allVallues();
  // console.log(arr[0]);
  // const [allRestaurants, setAllRestaurants] = useState(arr[0]);
  // const [filteredRestaurants, setFilteredRestaurants] = useState(arr[1]);
  //  let [allRestaurants, filteredRestaurants] = allVallues;
  // console.log(allRestaurants);
  // console.log(filteredRestaurants);

  let online = useOnline;
  if (!online) {
    return `you are offline`;
  }

  if (!allRestaurants) {
    return null; //early return (not render component)
  }
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="searchbox">
        <input
          type="text"
          data-testid="input"
          className="input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>

        <button
          data-testid="search-btn"
          className=""
          onClick={() => {
            const data = FilterData(searchText, allRestaurants);
            console.log(data);
            setFilteredRestaurants(data);
            console.log(filteredRestaurants);
          }}
        >
          Search
        </button>
      </div>

      <input
        type="text"
        value={user.name}
        onChange={(e) =>
          setUser({
            // ...user,
            name: e.target.value,
            email: user.email,
          })
        }
      ></input>
      <input
        type="text"
        value={user.email}
        onChange={(e) =>
          setUser({
            // ...user,
            name: user.name,
            email: e.target.value,
          })
        }
      ></input>

      <div className="restaurant-list" data-testid="res-list">
        {filteredRestaurants.map((restaurant) => {
          // return (
          //   <>
          //     <div key={restaurant.info.id}>{console.log(restaurant.info)}</div>
          //   </>
          // );
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {/* https://fooodvilla.netlify.app/api//dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.8235&lng=86.2304589&submitAction=ENTER&restaurantId=421811 */}
              {/*   */}
              {console.log(restaurant.info)}
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

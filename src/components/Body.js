import React, { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard";

const Body = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8889177&lng=77.61888669999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const res = await data.json();
      setResList(
        res?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }
    fetchData();
  }, []);

  console.log(resList);

  if (resList.length === 0) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

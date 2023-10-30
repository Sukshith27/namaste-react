import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const api = MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER";
    const data = await fetch(api);
    console.log("====", api);
    const json = await data.json();
    setResInfo(json.data);
    console.log("json", json);
  };
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo } = resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;
  console.log("itemCards--", itemCards);

  return (
    <div className="Menu">
      <h1>{name}</h1>
      <h2>{cuisines}</h2>
      <h2>Cost for two {costForTwo / 100}</h2>
      {itemCards?.map((item) => (
        <li key={itemCards?.card?.info?.id}>{item?.card.info.name}</li>
      ))}
    </div>
  );
};

export default RestaurantMenu;

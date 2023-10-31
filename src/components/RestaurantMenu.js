import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo } = resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;

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

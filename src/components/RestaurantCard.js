import React from "react";
import { CDN_URL } from "../utils/constants";

export const RestaurantCard = ({ resData }) => {
  const { name, cloudinaryImageId, cuisines, avgRating, sla, costForTwo } =
    resData?.info;
  const imgUrl = CDN_URL + cloudinaryImageId;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt="res-logo" src={imgUrl} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

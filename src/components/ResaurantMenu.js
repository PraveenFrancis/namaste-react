import { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./useRestaurantMenu";
const RestaurantMenu = () => {
 
  const { id } = useParams();
  const menuList= useRestaurantMenu(id)

  if (!menuList) return <Shimmer></Shimmer>;
  const { name, cuisines } = menuList?.cards[0]?.card?.card?.info;
  const { itemCards } =
    menuList.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards, "itemcards");
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;

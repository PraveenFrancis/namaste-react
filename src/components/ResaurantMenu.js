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
  console.log(menuList.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards, "itemcards");

  const categories = menuList.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( item => item?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  console.log(categories, "categories")
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(", ")}</p>

    
    </div>
  );
};
export default RestaurantMenu;

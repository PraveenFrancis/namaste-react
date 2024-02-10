import { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {
  const [menuList, setMenuList] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const { id } = useParams();
  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API + id 
    );
    const json = await data.json();
    console.log(json?.data?.cards[0]?.card?.card?.info?.name);
    setMenuList(json?.data?.cards[0]?.card?.card?.info);
  };
  if (!menuList) return <Shimmer></Shimmer>;
  const { name } = menuList;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>menu items</h2>
    </div>
  );
};
export default RestaurantMenu;

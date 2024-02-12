import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (id) =>{
  const [menuList, setMenuList] = useState(null);

    useEffect(() => {
        fetchMenu();
      }, []);

      const fetchMenu = async () => {
        const data = await fetch(MENU_API + id);
        const json = await data.json();
        console.log(json?.data?.cards[0]?.card?.card?.info);
        setMenuList(json?.data);
      };
      return menuList
}
export default useRestaurantMenu
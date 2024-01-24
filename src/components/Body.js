import RestaurantCard from "./RestaurantCard";
import cardData from "../utils/mockdata";
import { useState } from "react";
const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([
    {
      data: {
        id: "333",
        name: "Bucket Biriyani With Chicken Kabab",
        costForTwo: 4000,
        avgRating: "4.1",
        imageId: "vgmmxxdnxv06pjgf3ksw",
        deliveryTime: 36,
      },
    },
    {
      data: {
        id: "334",
        name: "Chilly",
        costForTwo: 4000,
        avgRating: "4",
        imageId: "icpycagtwmqflonmjud8",
        deliveryTime: 36,
      },
    },
    {
      data: {
        id: "335",
        name: "Gobi Manchurian (Qtr)",
        costForTwo: 4000,
        avgRating: "3.4",
        imageId: "kmz6vppi99urueddhba4",
        deliveryTime: 36,
      },
    },
    {
      data: {
        id: "336",
        name: "Kfc",
        costForTwo: 4000,
        avgRating: "3.9",
        imageId: "mwjxnsys86a5apetncxm",
        deliveryTime: 36,
      },
    },
  ])
  // const listOfRestaurents = 
  return (
    <div>
      <div className="filter">
        <button onClick={ () => {
          const filteredArray = listOfRestaurents.filter( (item) => {
            return item.data.avgRating > 4
          });
          setListOfRestaurents(filteredArray)
        }}>
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-card-container">
        {listOfRestaurents.map((restorent) => {
          return <RestaurantCard key={restorent.id} resData={restorent} />;
        })}
      </div>
    </div>
  );
};
export default Body;

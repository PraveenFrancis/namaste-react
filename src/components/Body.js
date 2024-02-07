import RestaurantCard from "./RestaurantCard";
import cardData from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [searchText, setSearchVal] = useState("");
  const [filterRest, setFilterVal]=  useState([])
  useEffect(() => {
    fetachData();
  }, []);

  const fetachData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterVal(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  const search = () => {
    const filterdSearchArray = listOfRestaurents.filter((item) =>
      item.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterVal(filterdSearchArray);
  };
  return listOfRestaurents.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div>
      <div className="filter">
        <div className="search">
          <input
            type="text"
            onChange={(e) => {
              setSearchVal(e.target.value);
              search();
            }}
            value={searchText}
          />
          <button
            onClick={() => {
              search();
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const filteredArray = listOfRestaurents.filter((item) => {
              return item.info.avgRating > 4.4;
            });
            setListOfRestaurents(filteredArray);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-card-container">
        {filterRest.map((restorent) => {
          return <RestaurantCard key={restorent.info.id} resData={restorent} />;
        })}
      </div>
    </div>
  );
};
export default Body;

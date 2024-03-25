import RestaurantCard from "./RestaurantCard";
import cardData from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_API} from "../utils/constants"
import useOnlineStatus from "./useOnlineStatus";
const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [searchText, setSearchVal] = useState("");
  const [filterRest, setFilterVal] = useState([]);
  const onlineStatus = useOnlineStatus()
  useEffect(() => {
    fetachData();
  }, []);

  const fetachData = async () => {
    const data = await fetch(
      RESTAURANT_API
    );
    const json = await data.json();
    setListOfRestaurents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterVal(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const search = () => {
    const filterdSearchArray = listOfRestaurents.filter((item) =>
      item.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterVal(filterdSearchArray);
  };

  if(!onlineStatus) return( <div>you are offline, please trun on your internet</div>)
  return listOfRestaurents.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div>
      <div className="flex my-2">
        <div className=" mr-2">
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
      <div className="flex flex-wrap gap-1 h-40">
        {filterRest.map((restorent) => {
          return <Link to={"restaurants/" + restorent.info.id} key={restorent.info.id}><RestaurantCard resData={restorent} /></Link>;
        })}
      </div>
    </div>
  );
};
export default Body;

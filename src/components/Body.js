import RestaurantCard from "./RestaurantCard";
import cardData from "../utils/mockdata";
const Body = () => {
    return (
      <div>
        <div className="search" >search</div>
        <div className="res-card-container">
          {cardData.map((restorent) => {
            return <RestaurantCard resData={restorent} />;
          })}
        </div>
      </div>
    );
  };
  export default Body
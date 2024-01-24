const RestaurantCard = (props) => {
    const { name, imageId, avgRating, deliveryTime } = props.resData.data;
    console.log(props);
    return (
      <div className="res-card">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            imageId
          }
        />
        <p>{name}</p>
        <p>{avgRating} stars</p>
        <p>{deliveryTime} minutes</p>
      </div>
    );
  };
  export default RestaurantCard
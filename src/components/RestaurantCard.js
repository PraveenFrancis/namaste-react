const RestaurantCard = (props) => {
  console.log(props)
    const { name, cloudinaryImageId, avgRating, parentId } = props.resData.info;
    console.log(props);
    return (
      <div className="res-card">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        />
        <p>{name}</p>
        <p>{avgRating} stars</p>
        <p>{parentId} minutes</p>
      </div>
    );
  };
  export default RestaurantCard
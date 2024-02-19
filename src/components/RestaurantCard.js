const RestaurantCard = (props) => {
  // console.log(props)
    const { name, cloudinaryImageId, avgRating, parentId } = props.resData.info;
    // console.log(props);
    return (
      <div className=" p-1 h-96 w-48">
        <img className="w-full object-cover h-min-10rem h-1/2"
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
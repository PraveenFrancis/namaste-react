const RestaurantCard = (props) => {
    const { name, imageId } = props.resData.card.info;
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
        <p>4.4 stars</p>
        <p>38 minutes</p>
      </div>
    );
  };
  export default RestaurantCard
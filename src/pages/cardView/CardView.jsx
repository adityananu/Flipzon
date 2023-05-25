import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import restaurantList from "../../data";
import "./cardView.css";

const CardView = () => {
  const { id } = useParams();
  const [value, setValue] = useState([]);

  useEffect(() => {
    const selectedItem = restaurantList.find((item) => item.data.id == id);
    setValue(selectedItem.data);
  }, []);


  return (
    <div className="cardView__box">
      <div className="card__view">
        <img
          src={
            `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/` +
            value.cloudinaryImageId
          }
          alt="realatedImage"
        />
        <div className="card__details">
          <h3>{value.name}</h3>
          <h5>{value.cuisines}</h5>
          <h3>₹{value.costForTwo}</h3>
          <Link to="/">
            <button>back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardView;

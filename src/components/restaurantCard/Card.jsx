import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({
  id,
  name,
  cuisines,
  costForTwo,
  cloudinaryImageId,
  addCartArray,
}) => {
  return (
    <>
      <div className="card__box">
        <Link
          to={`/CardView/${id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
        <img className="card__image"
          src={
            `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/` +
            cloudinaryImageId
          }
          alt="realatedImage"
        />
          <div className="card__details">
            <h3>{name}</h3>
            <h5>{cuisines}</h5>
            <span>₹{costForTwo}</span>
          </div>
        </Link>
        <button onClick={() => addCartArray(id)}>Add to cart</button>
      </div>
    </>
  );
};

export default Card;

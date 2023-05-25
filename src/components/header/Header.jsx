import React, { useState } from "react";
import "./header.css";
import { BsCartFill } from "react-icons/bs";
import CartPop from "../cartPop/CartPop";

const Header = ({ cartArray, cartRemoval, setCartArray }) => {
  const [cartPop, setCartPop] = useState(false);
  return (
    <>
      <div className="header__box">
        <div className="header__logo">
          Flip<span>zon</span>
        </div>

        <div className="header__cart">
          <div>
            <BsCartFill 
              style={{ height: "30px", width: "40px", color: "white" }}
              onClick={() => setCartPop(!cartPop)}
            />
            <span style={{ color: "#ffff", fontSize: "30px" }}>
              {cartArray.length}
            </span>
          </div>
        </div>
        
        {cartPop &&
          (cartArray.length > 0 ? (
            <div className="cartPop">
              <CartPop cartArray={cartArray} cartRemoval={cartRemoval} setCartArray={setCartArray}/>
            </div>
          ) : (
            <div className="cartPop">
              <p>No items in cart</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Header;

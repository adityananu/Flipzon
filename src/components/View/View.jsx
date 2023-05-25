import React, { useState } from "react";
import Header from "../header/Header";
import BodySection from "../section/BodySection";

const View = () => {
  const [cartArray, setCartArray] = useState([]);

  function cartRemoval(id){
    const removed = cartArray.filter((cart) => cart.id != id);
    setCartArray(removed);
  }

  return (
    <>
      <Header cartArray={cartArray} setCartArray={setCartArray} cartRemoval={cartRemoval}/>
      <BodySection cartArray={cartArray} setCartArray={setCartArray}/>
    </>
  );
};

export default View;

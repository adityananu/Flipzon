import React, { useState } from "react";
import restaurantList from "../../data";
import "./section.css";
import Card from "../restaurantCard/Card";
import Popup from "../../Popup";
import { AiFillCloseCircle } from "react-icons/ai";

const BodySection = ({ cartArray, setCartArray }) => {
  const [search, setSearch] = useState("");
  const [list, setList] = useState(restaurantList);
  const [popup, setPopup] = useState(false);

  // filter is used to search the desired hotel
  function filterAcc(e) {
    e.preventDefault();
    if (search.length > 0) {
      const derived = [...list].filter((item) =>
        item.data.name.toLowerCase().includes(search)
      );
      if (derived == "") {
        setPopup(true);
      } else {
        setList(derived);
        setSearch("");
      }
    } else {
      setPopup(false);
      setList(restaurantList);
    }
  }

  //sorting is for making list in asc or des order
  function sortingList(e) {
    const value = e.target.value;
    if (value === "ass") {
      const sortedList = [...list].sort((a, b) =>
        a.data.name.localeCompare(b.data.name)
      );
      setList(sortedList);
    } else if (value === "des") {
      const sortedList = [...list].sort((a, b) =>
        b.data.name.localeCompare(a.data.name)
      );
      setList(sortedList);
    } else {
      setList(restaurantList);
    }
  }

  // by clicking on add cart to add cart item to a new array
  const addCartArray = (cartId) => {
    const newCart = restaurantList.find((item) => item.data.id === cartId);

    const existingItem = cartArray.find((item) => item.id === newCart.data.id);
    //  the below is for quantity
    if (existingItem) {
      existingItem.quantity += 1;
      setCartArray([...cartArray]);
    } else {
      setCartArray([...cartArray, { ...newCart.data, quantity: 1 }]);
    }
  };

  return (
    <div className="section__box">
      <select
        id="sorting"
        style={{ padding: "5px", marginLeft: "30px", borderRadius: "5px" }}
        onChange={(e) => sortingList(e)}
      >
        <option value="ass">A-Z</option>
        <option value="des">Z-A</option>
      </select>
      <div className="section__searchbar">
        <form onSubmit={(e) => filterAcc(e)}>
          <input
            type="text"
            value={search}
            className="section__input"
            placeholder="Search here..."
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
          <AiFillCloseCircle className="aiicon" onClick={() => setSearch("")} />
        </form>
      </div>

      <div className="section__grid">
        {list.map((item) => (
          <Card key={item.data.id} {...item.data} addCartArray={addCartArray} />
        ))}
        {popup && <Popup setPopup={setPopup} />}
      </div>
    </div>
  );
};

export default BodySection;

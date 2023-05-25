import "./cartpop.css";

const CartPop = ({ cartArray,setCartArray, cartRemoval }) => {


  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCartItems = cartArray.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartArray(updatedCartItems);
  };

  const totalPrice = cartArray.reduce(
    (acc, item) => acc + item.costForTwo * item.quantity,
    0
  );

  return (
    <div>
      {cartArray.map((item) => (
        <div className="cartPop__box" key={item.id}>
          <img
            className="card__image"
            src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item.cloudinaryImageId}`}
            alt="relatedImage"
          />
          <div className="cartPop__text">
            <p>{item.name}</p>
            <div>
              Quantity:{" "}
              <input
                type="number"
                value={item.quantity}
                className="cartPop__quantity"
                min="1"
                onChange={(e) =>
                  handleQuantityChange(item.id, parseInt(e.target.value, 10))
                }
              />
            </div>
            <button onClick={() => {
              console.log("rey");
              cartRemoval(item.id)}}>remove</button>
          </div>
        </div>
      ))}
      <div className="cartPop__total">Total Price: ₹{totalPrice}</div>
    </div>
  );
};

export default CartPop;

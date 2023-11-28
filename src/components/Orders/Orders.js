import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { removeFromDb } from "../../utilities/fakedb";

const Order = () => {
  const { initialCart } = useLoaderData(); //  {products:products,initialCart: initialCart};
  const [cart, setCart] = useState(initialCart);
  const handleRemoveItem = (id) => {
    //console.log(id);
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
  return (
    <div className="shop-container">
      <div className="orders-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveItem={handleRemoveItem}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
      {/* <h2>This is Orders : {products.length}</h2>
            <p>Initial Cart: {initialCart.length}</p> */}
    </div>
  );
};

export default Order;

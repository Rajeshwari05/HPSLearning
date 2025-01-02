import "./Component.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, clearCart, addToCart } from "../utils/cartSlice";
import { useState } from "react";

export default function Cart() {
  const cartData = useSelector((state) => state.cartSlice.cartItems);
  const dispatch = useDispatch();

  const [quantities, setQuantities] = useState(
    cartData.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const handleRemove = (itemId) => {
    const updatedCart = cartData.filter((item) => item.id !== itemId);
    dispatch(deleteItem(updatedCart));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const increaseQuantity = (itemId) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  const decreaseQuantity = (itemId) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 1 ? prev[itemId] - 1 : 1,
    }));
  };

  const calculateTotal = () => {
    const itemTotal = cartData.reduce(
      (sum, item) => sum + (item.price / 100) * quantities[item.id],
      0
    );
    const deliveryFee = 38.85; // Static delivery fee
    const platformFee = 10; // Static platform fee
    const tax = itemTotal * 0.09; // Example GST (9%)
    return {
      itemTotal,
      deliveryFee,
      platformFee,
      tax,
      total: itemTotal + deliveryFee + platformFee + tax,
    };
  };

  const totals = calculateTotal();

  return (
    <div className="cart-container">
      {cartData.length > 0 ? (
        <>
          {cartData.map((data) => (
            <div className="cart-item" key={data.id}>
              <div className="item-details">
                <img
                  className="item-image"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/${data.imageId}`}
                  alt={data.name}
                />
                <p className="item-name">{data.name}</p>
              </div>
              <div className="item-actions">
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(data.id)}>-</button>
                  <span>{quantities[data.id]}</span>
                  <button onClick={() => increaseQuantity(data.id)}>+</button>
                </div>
                <span>
                  ₹{((data.price / 100) * quantities[data.id]).toFixed(2)}
                </span>
                <button
                  onClick={() => handleRemove(data.id)}
                  className="btn remove-btn"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Bill Details</h3>
            <p>Item Total: ₹{totals.itemTotal.toFixed(2)}</p>
            <p>Delivery Fee: ₹{totals.deliveryFee.toFixed(2)}</p>
            <p>Platform Fee: ₹{totals.platformFee.toFixed(2)}</p>
            <p>GST and Restaurant Charges: ₹{totals.tax.toFixed(2)}</p>
            <h4>To Pay: ₹{totals.total.toFixed(2)}</h4>
          </div>
          <button onClick={handleClearCart} className="btn clear-btn">
            Clear Cart
          </button>
        </>
      ) : (
        <p className="empty-cart">Your cart is empty.</p>
      )}
    </div>
  );
}


import "./Component.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, clearCart } from "../utils/cartSlice";

export default function Cart() {
    const cartData = useSelector((state) => state.cartSlice.cartItems);
    const dispatch = useDispatch();

    const handleRemove = (itemId) => {
        dispatch(deleteItem(itemId));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="cart-container">
            {cartData.length > 0 ? (
                cartData.map((data) => (
                    <div className="cart-item" key={data.id}>
                        <span className="item-name">{data.name}</span>
                        <img
                            className="item-image"
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/${data.imageId}`}
                            alt={data.name}
                        />
                        <span className="item-price">₹{data.price / 100}</span>
                        <span className="item-description">{data.description}</span>
                        <div className="cart-actions">
                            {/* <button onClick={() => handleAdd(data)} className="btn add-btn">Add</button> */}
                            <button onClick={() => handleRemove(data.id)} className="btn remove-btn">Remove</button>
                        </div>
                    </div>
                ))
            ) : (
                <p className="empty-cart">Your cart is empty.</p>
            )}
            {cartData.length > 0 && (
                <button onClick={handleClearCart} className="btn clear-btn">
                    Clear Cart
                </button>
            )}
        </div>
    );
}





import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate the total amount for all products in the cart
  const calculateTotalAmount = () => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return total.toFixed(2); // Returns the total rounded to 2 decimal places
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.id));
  };

  const calculateTotalCost = (item) => {
    return (item.price * item.quantity).toFixed(2);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Please add items before proceeding to checkout.');
      return;
    }

    let billDetails = 'Your Purchase Summary:\n\n';
    cart.forEach((item) => {
      billDetails += `${item.name} - Quantity: ${item.quantity} - $${calculateTotalCost(item)}\n`;
    });

    billDetails += `\nTotal Amount: $${calculateTotalAmount()}`;
    alert(billDetails); // Display the bill in an alert box
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      
      {/* If cart is empty, display a message */}
      {cart.length === 0 ? (
        <p>Your cart is empty. Please add some items to the cart!</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-cost">${item.price}</div>
                <div className="cart-item-quantity">
                  <button
                    className="cart-item-button cart-item-button-dec"
                    onClick={() => handleDecrement(item)}
                  >
                    -
                  </button>
                  <span className="cart-item-quantity-value">{item.quantity}</span>
                  <button
                    className="cart-item-button cart-item-button-inc"
                    onClick={() => handleIncrement(item)}
                  >
                    +
                  </button>
                </div>
                <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
                <button
                  className="cart-item-delete"
                  onClick={() => handleRemove(item)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: '20px', color: 'black' }} className="total_cart_amount"></div>
      <div className="continue_shopping_btn">
        <button
          className="get-started-button"
          onClick={onContinueShopping}
        >
          Continue Shopping
        </button>
        <br />
        <button
          className="get-started-button1"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;

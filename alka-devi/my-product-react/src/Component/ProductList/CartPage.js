import React from 'react';
import { useCart } from './CartContext'; 
import './CartPage.css'; 
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems } = useCart();

  return (
    <div className="cart-page">
      <h2>Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className='d-flex'>
          {cartItems.map(item => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
              </div>
            </li>
          ))}
        </ul>
       
      )}
      <div className='text-center'>
      <h4 >Great Deals Today!</h4>
      <h6 >Have Fun And</h6>
      <Link to='/pdt' className='d-inline-block text-center'>Do Some Shopping</Link>
      </div>
     
    </div>
  );
};

export default CartPage;
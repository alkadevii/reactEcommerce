import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'; // Import your CSS file for styling

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <div className="card product-card">
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <Link to={`/pdt/${product.id}`}>
          <h5 className="card-title">{product.title}</h5>
        </Link>
        <p className="card-text">{product.description}</p>
        <p className="card-category">Category: {product.category}</p>
        <p className="card-price">${product.price}</p>
        <Link to={'/cart'}>
        <button onClick={() => handleAddToCart(product)} className="btn btn-info btn-size">Add to Cart</button>
        </Link>
        
      </div>
    </div>
  );
};

export default ProductCard;
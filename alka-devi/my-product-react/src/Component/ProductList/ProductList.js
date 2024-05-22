import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = ({ searchText }) => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const filteredProducts = products.filter((p) => {
    return p.title.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div className='d-flex flex-row flex-wrap justify-content-between'>
      {filteredProducts.map((p) => (
        <ProductCard key={p.id} product={p} handleAddToCart={() => addToCart(p)} />
      ))}
    </div>
  );
};

export default ProductList;
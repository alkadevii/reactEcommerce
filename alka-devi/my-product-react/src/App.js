
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './Component/ProductList/CartContext'; 
import Header from './Component/Header/Header';
import About from './Screens/AboutScreen';
import Contact from './Screens/ContactScreen';
import Home from './Screens/HomeScreen';
import ProductScreens from './Screens/ProductScreen';
import NoPage from './Screens/NoPage';
import ProductDetail from './Screens/ProductDetail';
import './App.css';
import CartPage from './Component/ProductList/CartPage';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pdt' element={<ProductScreens />} />
          <Route path='/pdt/:ProductId' element={<ProductDetail />} />
          <Route path='/abt' element={<About />} />
          <Route path='/cnt' element={<Contact />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
        <Footer/>
      </div>
    </CartProvider>
  );
}

export default App;
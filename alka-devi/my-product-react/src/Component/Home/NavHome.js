import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavHome.css'
import CartIcon from '../Images/cart.png';


const NavHome = () => {
  return (
    <nav >
      <div className="nav-bg text-white">
    <ul className='navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row justify-content-around'>
        <li className='nav-item'>
            <NavLink to='/' className="nav-link">Home</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to='/pdt' className="nav-link">ProductList</NavLink>
        </li>
       
        <li className='nav-item'>
            <NavLink to='/abt' className="nav-link">About Us</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to='/cnt' className="nav-link">Contact Us</NavLink>
        </li>
        <NavLink to='/cart' className="nav-link"><img className="d-block icon" src={CartIcon} alt="carticon" style={{ margin: '0 5px' }}  /> </NavLink>
        
    </ul>
   
            
     
</div>
      
    </nav>
  );
};

export default NavHome;
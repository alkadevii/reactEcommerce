import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            
            <Link to="/abt">
            <h6 className='text-white'>About Us</h6>
            </Link>
          </div>
          <div className="col-md-6">
          <Link to="/cnt">
            <h6 className='text-white'>Contact Us</h6>
            </Link>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
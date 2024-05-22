import './Header.css';
import {NavLink} from 'react-router-dom'
import homeicon from '../Images/home.png';

const Header = (props) => {
    
    return ( 
        <div className='nav-item home-div row align-items-center'>
        <NavLink to='/' className="home col-auto text-white"><img className="d-block icon" src={homeicon} alt="homeicon" />Home</NavLink>
        <h1 className="col-auto text-white">ONLINE SHOPPING</h1>
    </div>
       
     );

}

 
export default Header;
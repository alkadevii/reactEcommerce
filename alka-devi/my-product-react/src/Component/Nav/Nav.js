import './Nav.css'
function Nav(props){
    
    const onSearchChange = ($e) => {
        props.onSearchChange($e.target.value);
        
    }

    return(
        <div  className="nav justify-content-center nav-div">
            
            <input type="search" className="nav-item" onChange={onSearchChange} />
            <button className="btn nav-btn">Search</button>
        </div>
    )

}
     
   
export default Nav;
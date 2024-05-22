import Banner from "../Component/Home/Banner";
import NavHome from "../Component/Home/NavHome";
import Offers from "../Component/Home/Offer";


const Home = () => {
    return (
      <div>
         <NavHome/>
         <Banner/>
         <Offers />
      </div>
   
    )
  };
  
  export default Home;
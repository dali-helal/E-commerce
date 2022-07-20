import Filterproducts from "../../components/FilterProducts/Filterproducts";
import Navbar from "../../components/Navbar/Navbar";
import ImageSilder from "../../ImagesCarousel/ImageSilder";
import {silderData} from "../../ImagesCarousel/silderData.js"
import Products from "../../components/Products/Products.jsx";
import "../../pages/AllProducts/PageProducts.css"
import Footer from "../../components/footer/Footer";
const Allproducts = () => {
    return ( 
      
             <section className="all-products">
             <Navbar/>
             <ImageSilder sildes={silderData}/>
             <div className="display-products">
             <Filterproducts/>
             <Products/>
             </div>
             <Footer/>
             </section>
    
     );
}
 
export default Allproducts;
import Image1 from "./ImagesFeatured/9.jpg"
import Image2 from "./ImagesFeatured/5.jpg"
import Image3 from "./ImagesFeatured/31.png"
import Image4 from "./ImagesFeatured/41.png"
import Image5 from "./ImagesFeatured/51.png"
import Image6 from "./ImagesFeatured/61.png"
import Image7 from "./ImagesFeatured/3.jpg"
import Image8 from "./ImagesFeatured/4.jpg"
import "../FeaturedProducts/FeaturedProducts.css"
import { Link } from "react-router-dom"
const Products = () => {
    return ( 
        <div className="section">
            <h3>Featured Products</h3>
            <div className="grid-container">
            <div>
                <img src={Image1}></img>
                <div className="info">
                    <h6>Rolex</h6>
                    <h6>199.00 £</h6>
                </div>
                <button>See Details</button>
            </div>
            <div>
                <img src={Image2}></img>
                <div className="info">
                    <h6>Swatch</h6>
                    <h6>245.00 £</h6>
                </div>
                <button>See Details</button>
            </div>
            <div>
                <img src={Image3}></img>
                <div className="info">
                    <h6>Festina</h6>
                    <h6>429.00 £</h6>
                </div>
                <button>See Details</button>
            </div>
            <div>
                <img src={Image4}></img>
                <div className="info">
                    <h6>Xfeng</h6>
                    <h6>225.00 £</h6>
                </div>
                <button>See Details</button>
            </div>
            <div>
                <img src={Image5}></img>
                <div className="info">
                    <h6>VIIR</h6>
                    <h6>499.00 £</h6>
                </div>
                <button>See Details</button>
            </div>
            <div>
                <img src={Image6}></img>
                <div className="info">
                    <h6>Tissot</h6>
                    <h6>49.00 £</h6>
                </div>
                <button>See Details</button>
            </div>
            <div>
                <img src={Image7}></img>
                <div className="info">
                    <h6>Rolex</h6>
                    <h6>325.90 £</h6>
                </div>
                <button>See Details</button>
            </div>
            <div>
                <img src={Image8}></img>
                <div className="info">
                    <h6>Festina</h6>
                    <h6>259.50 £</h6>
                </div>
                <button>See Details</button>
            </div>
            </div>
            <Link to={"/allproducts"}>
            <button className="section-button">More Products</button>
            </Link>
            
        </div>
     );
}
 
export default Products;
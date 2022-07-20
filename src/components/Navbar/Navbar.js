import Logo from '../../ImagesSrc/log1.png'
import "../../style.css"
import {FaUser,FaShoppingCart,FaSearch} from "react-icons/fa"
import { Link } from 'react-router-dom'
const Navbar = () => {
    return ( 
         <nav>
            <div className='site-name'>
                <Link to={'/'}>
                <img src={Logo} className="logo"/>
                <h3>watch store </h3></Link>
               
            </div>
            <div className='icon'>
            <div className='search'>  
            <FaSearch className='icon-search' size={20}/>
            <input  type="text" placeholder="search for products... " ></input>  
            </div>
            <Link to={'/signin'}>
            <FaUser  className='icons' size={"35px"}/>
            </Link>
            <div className='div-shop'>
            <FaShoppingCart className ='icons' size={"40px"}/>
            <div>5</div>
            </div>
            </div>
         </nav>
     );
}
 
export default Navbar;
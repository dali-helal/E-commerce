import {FaFacebookF,FaInstagram,FaLinkedin,FaTwitter,FaEnvelope,FaPhoneAlt} from "react-icons/fa"
import "../footer/FooterStyles.css"
const Footer = () => {
    return ( 
        <div className="footer">
            <div className="about-us">
                <h2>About-us</h2>
                <h4>lorem Ipsum is simply 
            and typesetting industry. <br/>
            nd typesetting industry. </h4>
            <div className="phone">
                <FaPhoneAlt size={18}/>
                <h4>+216 52886446</h4>
            </div>
            <div className="email">
            <FaEnvelope size={22}/>
            <h4>dalihelal6@gmail.com</h4>
            </div>
            
            <div className="send-email">
                <input type="text" placeholder="Send email"/>
                <button className="send-btn">Send</button>
            </div>
            </div>
            <div className="footer-icons">
                <h2>Contact-us</h2>
                <div>
                <FaFacebookF size={20}/>
                <FaInstagram size={20}/>
                <FaTwitter size={20}/>
                <FaLinkedin size={20}/>
                </div>
                
            </div>
        </div>
     );
}
 
export default Footer;
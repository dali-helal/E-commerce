import Image from  '../../ImagesSrc/1.png'
import "../../style.css"
import { Link } from 'react-router-dom';
const HomeWatch = () => {
    return ( 
        <div className="home-watch">
            <div className='section-home'>
            <h2>Time is money </h2>
            <h4>lorem Ipsum is simply dummy text of the printing 
            and typesetting industry. Lorem Ipsum has been the
            nd typesetting industry. Lorem Ipsum has been the
            and typesetting industry. Lorem Ipsum has been the
            nd typesetting industry. Lorem Ipsum has been the
            </h4>
            <button>Get started</button>
            
            </div>
            <img className='img-home' src={Image}/>
        </div>
     );
}
 
export default HomeWatch;
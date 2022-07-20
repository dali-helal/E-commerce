import "./Signin.css"
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa"
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa"
import { Link } from "react-router-dom";
const Signin = () => {
  const { email, SetEmail } = useState('')
  const { password, SetPassword } = useState('')
  return (
    <div className="body">
      <div className="container">
        <form>
          <div className="email">
            <FaUser className="icon" size={"27px"} />
            <input
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={e => SetEmail(e.target.value)}
            />
          </div>
          <h6></h6>
          <div className="password">
            <FaLock className="icon" size={"25px"} />
            <input
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={e => SetPassword(e.target.value)}
            />
          </div>
          <h6></h6>
          <h4>Forget password ?</h4>
          <button className="signin-btn">Sign in</button>
        </form>

        <div className="sign-up">
          <div>
          <h4>don't have an account ?</h4>
          <Link to={"/signup"}>
            <h5> Sign up!</h5>
          </Link>
          </div>
        </div>

        <div className="sign-with">
          <div id="sign-with">
            <hr />
            <h6>or sign in with</h6>
            <hr />
          </div>

          <div className="sign-icons" >
            <FaFacebook className="icons-Fa" size={"45"} />
            <div className="icon-gemail">
            <FaGoogle className="icons-ge" size={"28"} />
            </div>
            <div className="icon-twitter">
            <FaTwitter className="icons-ti" size={"28"} />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
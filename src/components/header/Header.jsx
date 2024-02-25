/* eslint-disable no-unused-vars */
import "./Header.scss";
import SiteLogo from "../assets/site-logo.png";
import DarkImage from "../assets/dark.svg";
function Header() {
  return (
    <div className="container">
      <nav>
        <div className="nav-left">
          <img src={SiteLogo} alt="" />
          <h1>
            <a href="#">Product</a>
          </h1>
        </div>
        <div className="nav-right">
          <ul className="nav-list">
            <li className="nav-list-items">
              <a href="#product">Product</a>
            </li>
            <li className="nav-list-items">
              <a href="#">Customers</a>
            </li>
            <li className="nav-list-items">
              <a href="#price-table">Pricing</a>
            </li>
            <li className="nav-list-items"><a href="#resources">Resources</a></li>
          </ul>
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
          <img src={DarkImage} alt="" />
        </div>
      </nav>
    </div>
  );
}

export default Header;

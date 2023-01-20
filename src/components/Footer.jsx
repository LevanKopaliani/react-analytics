import "../styles/Footer.css";
import logo from "../img/footerlogo.png";
import fb from "../img/Facebook.png";
import tw from "../img/Twitter.png";
import ins from "../img/Instagram.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer container">
      <img src={logo} alt="footer-logo" />
      <ul className="footer-nav">
        <li>Product</li>
        <li>Pricing Plans</li>
        <li>FAQ</li>
        <li>Blog</li>
      </ul>
      <div className="footer-social">
        <Link to="/">
          <img src={fb} alt="facebook" />
        </Link>
        <Link>
          <img src={tw} alt="twitter" />
        </Link>
        <Link>
          <img src={ins} alt="instagram" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

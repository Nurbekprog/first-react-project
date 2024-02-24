import "./Footer.scss";
import FooterImg from "../assets/footer-img.png";
function Footer() {
  return (
    <div className="container footer">
      <div className="footer-left">
        <h2>Join 100 Compannies who <br /> boost their business with <br /> Product</h2>
        <button className="footer-btn">Get This</button>
      </div>
      <div className="footer-right">
        <img src={FooterImg} alt="" />
      </div>
    </div>
  );
}

export default Footer;

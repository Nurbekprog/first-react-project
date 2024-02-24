import "./Specifically.scss";
import Icon1 from "../assets/icon1.png";
import Icon2 from "../assets/icon2.png";
import Icon3 from "../assets/icon3.png";
import Icon4 from "../assets/icon4.png";

function Specifically() {
  return (
    <div className="specifically">
      <div className="specifically-headtext container">
        <h2>Product was Built Specifically for You</h2>
      </div>

      <ul className="specifically-list container">
        <li className="specifically-items">
          <img src={Icon1} alt="icon1" />
          <h4>First click tests</h4>
          <p>While most people enjoy casino gambling,</p>
        </li>
        <li className="specifically-items">
          <img src={Icon2} alt="icon2" />
          <h4>Design surveys</h4>
          <p>Sports betting, lottery and bingo playing for the fun</p>
        </li>
        <li className="specifically-items">
          <img src={Icon3} alt="icon3" />
          <h4>Preference tests</h4>
          <p>The Myspace page defines the individual.</p>
        </li>
        <li className="specifically-items">
          <img src={Icon4} alt="icon4" />
          <h4>Five second tests</h4>
          <p>Personal choices and the overall personality of the person. </p>
        </li>
      </ul>
      <button className="specifically-btn">SIGN UP NOW</button>
    </div>
  );
}

export default Specifically;

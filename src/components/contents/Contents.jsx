import "./Contents.scss";
import ContentImg1 from "../assets/content-img1.png";
import ContentImg2 from "../assets/content-img2.png";
import ContentImg3 from "../assets/content-img3.png";


function Contents() {
  return (
    <div className="contents ">
      <div className="contents-headtext container">
        <h2 className="container">Contents Strategies</h2>
        <p>
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
      </div>
      <ul className="content-card-list">
        <li className="content-card-items">
          <img src={ContentImg1} alt="" className="content-img" />
          <div className="content-body">
            <p>
              By <b>Wahid Ari</b> | 03 March 2019
            </p>
            <h3>Increasing Prosperity With Positive Thinking</h3>
          </div>
        </li>
        <li className="content-card-items">
          <img src={ContentImg2} alt="" className="content-img" />
          <div className="content-body">
            <p>
              By <b>Wahid Ari</b> | 03 March 2019
            </p>
            <h3>Motivation Is The First Step To Success</h3>
          </div>
        </li>
        <li className="content-card-items">
          <img src={ContentImg3} alt="" className="content-img" />
          <div className="content-body">
            <p>
              By <b>Wahid Ari</b> | 03 March 2019
            </p>
            <h3>Success Steps For Your Personal Or Business</h3>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Contents;

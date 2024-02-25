import "./Home.scss";
import HomeImage from "../assets/amico.png";
import PlayImage from "../assets/play.png";
function Home() {
  return (
    <div className="home container" id="resources">
      <div className="home-left">
        <h2>Work at the speed of thought</h2>
        <p>
          Tools, tutorials, design and innovation experts, all in one place! The
          most intuitive way to imagine your next user experience.
        </p>
        <div className="home-left-btns">
          <button className="home-btn">Get started</button>
          <a href="#"><img src={PlayImage} alt="" />Watch the Video</a>
        </div>
      </div>
      <div className="home-right">
        <img src={HomeImage} alt="" />
      </div>
    </div>
  );
}

export default Home;

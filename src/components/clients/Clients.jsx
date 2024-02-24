import "./Clients.scss";
import StarIcon from "../assets/star-icon.png";
import Client1 from "../assets/client1.png";
import Client2 from "../assets/client2.png";
import Client3 from "../assets/client3.png";
function Clients() {
  return (
    <div className="clients container">
      <div className="clients-headtext">
        <h2>What Clients Say</h2>
        <p>
          Problems trying to resolve the conflict between <br /> the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <ul className="clients-list">
        <li className="clients-list-items">
          <img src={StarIcon} alt="stars" />
          <p>
            Product helps you see how many more days you need to work to reach
            your financial goal.
          </p>
          <img src={Client1} alt="client1" />
        </li>
        <li className="clients-list-items">
          <img src={StarIcon} alt="stars" />
          <p>
            Product helps you see how many more days you need to work to reach
            your financial goal.
          </p>
          <img src={Client2} alt="client2" />
        </li>
        <li className="clients-list-items">
          <img src={StarIcon} alt="stars" />
          <p>
            Product helps you see how many more days you need to work to reach
            your financial goal.
          </p>
          <img src={Client3} alt="client3" />
        </li>
      </ul>
    </div>
  );
}

export default Clients;

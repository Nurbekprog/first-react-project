import "./Price.scss";

function Price() {
  return (
    <div className="price container">
      <div className="price-table-headtext">
        <h2>Price Table</h2>
        <p>We offer competitive price</p>
      </div>
      <ul className="price-table">
        <li className="price-table-items">
          <h3>Free</h3>
          <p>Brief price description</p>
          <div className="price-table-items--price">
            <h1>0</h1>
            <span>
              <p className="dollar">$</p>
              <p>Per / month</p>
            </span>
          </div>
          <ul>
            <li>Only 2 Operators</li>
            <li>Notifications</li>
            <li>Landing Pages</li>
          </ul>
          <button className="order-btn">Order Now</button>
        </li>
        <li className="price-table-items">
          <h3>Standard</h3>
          <p>Brief price description</p>
          <div className="price-table-items--price">
            <h1>5</h1>
            <span>
              <p className="dollar">$</p>
              <p>Per / month</p>
            </span>
          </div>
          <ul>
            <li>5+ Operators</li>
            <li>Notifications</li>
            <li>Landing Pages</li>
          </ul>
          <button className="order-btn">Order Now</button>
        </li>
        <li className="price-table-items">
          <h3>Premium</h3>
          <p>Brief price description</p>
          <div className="price-table-items--price">
            <h1>10</h1>
            <span>
              <p className="dollar">$</p>
              <p>Per / month</p>
            </span>
          </div>
          <ul>
            <li>10+ Operators</li>
            <li>Notifications</li>
            <li>Landing Pages</li>
          </ul>
          <button className="order-btn">Order Now</button>
        </li>
      </ul>
    </div>
  );
}

export default Price;

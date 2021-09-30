import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav">
      <div className="nav_logo">S-Escape</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/reservation">Reservation</Link>
        </li>
        <li>
          <Link to="/signin">Signin</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;

import { Link } from "react-router-dom";

const Navigation = () => {
  return (
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
  );
};

export default Navigation;

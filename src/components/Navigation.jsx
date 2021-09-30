import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #282c34;
`;

const NavigationLogo = styled.div`
  font-size: 30px;
  font-weight: 500;
  font-style: italic;
  color: #eee;
  margin: 25px;
`;

const NavigationItem = styled.li`
  display: inline-block;
  margin: 10px 25px;

  a {
    color: rgb(224, 186, 12);
    font-weight: 300;
  }
`;

const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationLogo>S-Escape</NavigationLogo>
      <ul>
        <NavigationItem>
          <Link to="/">Home</Link>
        </NavigationItem>
        <NavigationItem>
          <Link to="/reservation">Reservation</Link>
        </NavigationItem>
        <NavigationItem>
          <Link to="/signin">Signin</Link>
        </NavigationItem>
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;

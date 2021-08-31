import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navigation from "./components/Navigation"
import Home from "./Pages/Home"
import Reservation from "./Pages/Reservation"
import SignIn from "./Pages/SignIn"

const Router = () => {
  return (
    <BrowserRouter>
    <Navigation />
        <Route path="/" component={Home} exact={true} />
        <Route path="/reservation" component={Reservation} />
        <Route path="/signin" component={SignIn} />
    </BrowserRouter>
  )
}

export default Router;
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./Pages/Home"
import Reservation from "./Pages/Reservation"
import SignIn from "./Pages/SignIn"

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/reservation" component={Reservation} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
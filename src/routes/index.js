import { Switch, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Singup } from "../pages/Signup";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" >
                <Home />
            </Route>
            <Route path="/login" >
                <Login />
            </Route>
            <Route path="/signup">
                <Singup />
            </Route>
        </Switch >
    );
}
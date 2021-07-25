import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Singup } from "../pages/Signup";
import { User } from "../pages/User";
import { Logout } from "../pages/Logout";

export default function Routes() {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

        if (token) {
            return setAuthenticated(true);
        }
    }, [authenticated]);

    const allowed = authenticated ?
        JSON.parse(localStorage.getItem("@KenzieHub:user"))
        : false;

    return (
        <Switch>
            <Route exact path="/" >
                <Home allowed={allowed} />
            </Route>
            <Route path="/user/:id" >
                <User allowed={allowed} />
            </Route>
            <Route path="/login" >
                <Login authenticated={authenticated} setAuthenticated={setAuthenticated} />
            </Route>
            <Route path="/signup">
                <Singup authenticated={authenticated} />
            </Route>
            <Route path="/logout">
                <Logout />
            </Route>
        </Switch >
    );
}
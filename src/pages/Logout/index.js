import { useEffect } from "react";
import { Redirect } from "react-router-dom";

export function Logout() {
    useEffect(() => {
        localStorage.clear();
        window.location.reload();
    }, [])

    return <Redirect to="/" />
}
import { Container } from "./styles";

import { Link } from "react-router-dom";
import { Bar } from "../Home/styles";

import UserCard from "../../components/UserCard";
import TechsWorks from "../../components/TechsWorks";

export function User() {
    return (
        <>
            <Bar>
                <div>
                    <Link to="/">
                        <h1>KenzieHub</h1>
                    </Link>
                    <Link to="/login">Entrar</Link>
                </div>
            </Bar>
            <Container>
                <UserCard />
                <TechsWorks />
            </Container>
        </>
    );
}
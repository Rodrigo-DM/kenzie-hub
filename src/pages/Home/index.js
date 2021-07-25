import { Container, Bar } from "./styles";

import Profiles from "../../components/Profiles";

import { Link } from "react-router-dom";

export function Home({ authenticated, allowed }) {
    return (
        <Container>
            <Bar>
                {
                    allowed ?
                        <div>
                            <h1>KenzieHub</h1>
                            <Link to={`/user/${allowed.id}`}>{allowed.name}</Link>
                        </div>
                        :
                        <div>
                            <Link to="/">
                                <h1>KenzieHub</h1>
                            </Link>
                            <Link to="/login">Entrar</Link>
                        </div>
                }
            </Bar>
            <Profiles allowed={allowed} />
        </Container>
    );
}
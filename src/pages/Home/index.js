import { Container, Bar, Content } from "./styles";

import Button from "../../components/Button";
import Profiles from "../../components/Profiles";

import { Link } from "react-router-dom";

export function Home() {
    return (
        <Container>
            <Bar>
                <div>
                    <h1>KenzieHub</h1>
                    <Link to="/login">Entrar</Link>
                </div>
            </Bar>
            <Content>
                <input placeholder="Tecnologia" />
                <Button>Filtrar</Button>
            </Content>
            <Profiles />
        </Container>
    );
}
import { Container, Bar, Content, Right } from "./styles";

import Input from "../../components/Input";
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
                <Input maxWidth={450} placeholder="Tecnologia" />
                <Button>Filtrar</Button>
            </Content>
            <Profiles />
        </Container>
    );
}
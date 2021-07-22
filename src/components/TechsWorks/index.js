import { Container, Bar, Content } from "./styles";

import Techs from "../../components/Techs";
import Works from "../../components/Works";

function TechsWorks() {
    return (
        <Container>
            <Bar>
                <h3>Tecnologias / Trabalhos</h3>
            </Bar>
            <Content>
                <Techs />
                <Works />
            </Content>
        </Container>
    );
}

export default TechsWorks;
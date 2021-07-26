import { Container, Bar, Content } from "./styles";

import Techs from "../../components/Techs";
import Works from "../../components/Works";
import ModalAdicionar from "../ModalAdicionar"

import { BiListPlus } from "react-icons/bi";

function TechsWorks({ user, permission, up, setUp }) {
    const { techs, works } = user;

    return (
        <Container>
            <Bar>
                <h3>Tecnologias / Trabalhos</h3>
                {
                    permission &&
                    <ModalAdicionar up={up} setUp={setUp}>
                        <BiListPlus />
                    </ModalAdicionar>
                }
            </Bar>
            <Content>
                <Techs
                    techs={techs}
                    permission={permission}
                    up={up}
                    setUp={setUp}
                />
                <Works
                    works={works}
                    permission={permission}
                    up={up}
                    setUp={setUp}
                />
            </Content>
        </Container>
    );
}

export default TechsWorks;
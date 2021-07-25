import { Container, Bar, Content } from "./styles";

import Techs from "../../components/Techs";
import Works from "../../components/Works";
import SimpleModal from "../SimpleModal"

import { BiListPlus } from "react-icons/bi";

function TechsWorks({ techs, works, permission }) {
    return (
        <Container>
            <Bar>
                <h3>Tecnologias / Trabalhos</h3>
                {permission && <SimpleModal><BiListPlus /></SimpleModal>}
            </Bar>
            <Content>
                <Techs techs={techs} permission={permission} />
                <Works works={works} permission={permission} />
            </Content>
        </Container>
    );
}

export default TechsWorks;
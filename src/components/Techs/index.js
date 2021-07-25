import { Container } from "./styles";

import TechCard from "../TechCard";

function Techs({ techs, permission }) {
    return (
        <Container>
            <ul>
                {
                    techs.map(tech => <TechCard key={tech.id} tech={tech} permission={permission} />)
                }
            </ul>
        </Container>
    );
}

export default Techs;
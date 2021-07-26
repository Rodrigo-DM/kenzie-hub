import { Container } from "./styles";

import TechCard from "../TechCard";

function Techs({ techs, permission, up, setUp }) {
    return (
        <Container>
            <ul>
                {
                    techs.map(tech => <TechCard
                        key={tech.id}
                        tech={tech}
                        permission={permission}
                        up={up}
                        setUp={setUp}
                    />)
                }
            </ul>
        </Container>
    );
}

export default Techs;
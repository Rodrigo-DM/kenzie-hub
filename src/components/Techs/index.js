import { Container } from "./styles";

import TechCard from "../TechCard";

import { useState } from "react";

function Techs() {
    const [techs, setTechs] = useState([
        {
            "id": "55126701-18ac-40df-aab9-3a88657db446",
            "title": "React",
            "status": "Avançado",
            "created_at": "2020-11-30T16:26:53.953Z",
            "updated_at": "2020-11-30T16:26:53.953Z"
        },
        {
            "id": "af06a853-c1fb-4a94-960d-1c6caa8d2b5c",
            "title": "Typescript",
            "status": "Avançado",
            "created_at": "2020-11-30T18:40:08.316Z",
            "updated_at": "2020-11-30T18:40:08.316Z"
        }
    ]);

    return (
        <Container>
            <ul>
                {
                    techs.map(tech => <TechCard tech={tech} />)
                }
            </ul>
        </Container>
    );
}

export default Techs;
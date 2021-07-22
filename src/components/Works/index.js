import { Container } from "./styles";

import WorkCard from "../WorkCard";

import { useState } from "react";

function Works() {
    const [works, setWorks] = useState([
        {
            "id": "0cd019b5-10c5-4eb4-9781-5dff577cfd9e",
            "title": "KenzieHub",
            "description": "I was the backend developer of this project, and i did it using Typescript and NodeJS",
            "deploy_url": "https://kenziehub.me",
            "created_at": "2020-12-03T01:13:44.720Z",
            "updated_at": "2020-12-03T01:13:44.720Z"
        },
        {
            "id": "0cd019b5-10c5-4eb4-9781-5dff577cfd9e",
            "title": "KenzieHub",
            "description": "I was the backend developer of this project, and i did it using Typescript and NodeJS",
            "deploy_url": "https://kenziehub.me",
            "created_at": "2020-12-03T01:13:44.720Z",
            "updated_at": "2020-12-03T01:13:44.720Z"
        },
        {
            "id": "0cd019b5-10c5-4eb4-9781-5dff577cfd9e",
            "title": "KenzieHub",
            "description": "I was the backend developer of this project, and i did it using Typescript and NodeJS",
            "deploy_url": "https://kenziehub.me",
            "created_at": "2020-12-03T01:13:44.720Z",
            "updated_at": "2020-12-03T01:13:44.720Z"
        }
    ]);

    return (
        <Container>
            {
                works.map(work => <WorkCard work={work} />)
            }
        </Container>
    );
}

export default Works;
import { Container } from "./styles";

import WorkCard from "../WorkCard";

function Works({ works, permission }) {
    return (
        <Container>
            {
                works.map(work => <WorkCard key={work.id} work={work} permission={permission} />)
            }
        </Container>
    );
}

export default Works;
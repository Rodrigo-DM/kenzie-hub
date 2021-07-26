import { Container } from "./styles";

import WorkCard from "../WorkCard";

function Works({ works, permission, up, setUp }) {
    return (
        <Container>
            {
                works.map(work => <WorkCard
                    key={work.id}
                    work={work}
                    permission={permission}
                    up={up}
                    setUp={setUp}
                />)
            }
        </Container>
    );
}

export default Works;
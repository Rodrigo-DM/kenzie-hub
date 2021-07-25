import { Container } from "./styles";
import { Bar } from "../../components/Bar";

import Profiles from "../../components/Profiles";

export function Home({ allowed }) {
    return (
        <Container>
            <Bar allowed={allowed} />
            <Profiles allowed={allowed} />
        </Container>
    );
}
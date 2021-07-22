import { Container } from "./styles";

function TechCard({ tech }) {
    const { title, status } = tech;

    return (
        <Container>
            <p>{title}</p>
            <p>{status}</p>
        </Container>
    );
}

export default TechCard;
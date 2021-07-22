import { Container } from "./styles";

import { BiEdit, BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";

function WorkCard({ work }) {
    const { title, description, deploy_url } = work;

    return (
        <Container>
            <p>{title}</p>
            <p>{description}</p>
            <a href={deploy_url}>Acessar</a>
            <Link>
                <BiEdit />
            </Link>
            <Link>
                <BiTrash />
            </Link>
        </Container>
    );
}

export default WorkCard;
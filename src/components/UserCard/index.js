import { Container } from "./styles";

import { Link } from "react-router-dom";

function UserCard() {
    return (
        <Container>
            <figure>
                <img src="https://picsum.photos/100/100" alt="profile" />
                <figcaption>Rodrigo Diniz</figcaption>
            </figure>
            <div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p>react, html, css, java script</p>
            </div>
            <Link>Contado</Link>
            <Link to="/editar">Editar</Link>
        </Container>
    );
}

export default UserCard;
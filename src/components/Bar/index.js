import { Container, Content } from "./styles";

import { Link } from "react-router-dom";
import { useState } from "react";

import { AiFillCaretDown } from "react-icons/ai";

export function Bar({ allowed }) {
    const [show, setShow] = useState(false);

    const showSubMenu = () => {
        setShow(!show)
    }

    return (
        <Container>
            <Link to="/">
                <h1>KenzieHub</h1>
            </Link>

            <Content>
                {
                    allowed ?
                        <>
                            <button onClick={showSubMenu}>{allowed.name} {<AiFillCaretDown />}</button>
                            {
                                show &&
                                <ul>
                                    <li>
                                        <Link to={`/user/${allowed.id}`}>
                                            Meu Perfil
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/logout">
                                            Sair
                                        </Link>
                                    </li>
                                </ul>
                            }
                        </>
                        :
                        <Link to="/login">Entrar</Link>
                }
            </Content>

        </Container>
    );
}
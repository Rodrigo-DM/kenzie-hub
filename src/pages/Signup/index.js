import { Link } from "react-router-dom";
import { Container, Backgorund, Content, FormContainer } from "./styles";

import { AiOutlineMail, AiOutlineContacts } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri"
import { CgProfile } from "react-icons/cg";
import { MdDescription } from "react-icons/md";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState } from "react";

export function Singup() {
    const [nextForm, setNextForm] = useState(false);

    const mudar = () => {
        setNextForm(true);
    }

    return (
        <Container>
            <Content>
                <h1>KenzieHub</h1>
                <FormContainer>
                    <form>
                        <h2>Cadastro</h2>
                        {!nextForm &&
                            <>
                                <Input maxWidth={270} marginBot={1} icon={AiOutlineMail} type="text" placeholder="E-mail" />
                                <Input maxWidth={270} marginBot={1} icon={RiLockPasswordLine} type="password" placeholder="Senha" />
                                <Input maxWidth={270} marginBot={1} icon={RiLockPasswordLine} type="password" placeholder="Confirmação de Senha" />
                            </>
                        }
                        {nextForm &&
                            <>
                                <Input maxWidth={270} marginBot={1} icon={CgProfile} type="text" placeholder="Name" />
                                <Input maxWidth={270} marginBot={1} icon={MdDescription} type="text" placeholder="Bio" />
                                <Input maxWidth={270} marginBot={1} icon={AiOutlineContacts} type="text" placeholder="Contato" />

                                <select name="select">
                                    <option value="">--Módulo do Curso--</option>
                                    <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
                                    <option value="Segundo módulo (Frontend Avançado)">Segundo módulo</option>
                                    <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo</option>
                                    <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
                                </select>
                            </>
                        }
                        <Button onClick={mudar}>{nextForm ? "Enviar" : "Continuar"}</Button>
                        <p>Já possui uma conta? <Link to="/login">Acesse</Link> </p>
                    </form>
                </FormContainer>
            </Content>
            <Backgorund />
        </Container>
    );
}
import { Link } from "react-router-dom";
import { Container, Backgorund, Content, FormContainer } from "./style";

import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri"

import Input from "../../components/Input";
import Button from "../../components/Button";

export function Login() {
    return (
        <Container>
            <Backgorund />
            <Content>
                <h1>KenzieHub</h1>
                <FormContainer>
                    <form>
                        <h2>Acessar</h2>
                        <Input icon={AiOutlineMail} type="text" placeholder="E-mail" />
                        <Input icon={RiLockPasswordLine} type="password" placeholder="Senha" />
                        <Button>Entrar</Button>
                        <p>Não possui uma conta? <Link>Cadastre-se</Link> </p>
                    </form>
                </FormContainer>
            </Content>
        </Container>
    );
}
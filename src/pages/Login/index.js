import { Link } from "react-router-dom";
import { Container, Backgorund, Content, FormContainer } from "./styles";

import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

import Input from "../../components/Input";
import Button from "../../components/Button";

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

export function Login() {
    const formSchema = yup.object().shape({
        email: yup
            .string()
            .required("Email obrigatório").email("Digite um email valido"),
        password: yup
            .string()
            .min(6, "No minimo 6 digitos")
            .required("Senha obrigatorio"),
    });

    const {
        register,
        handleSubmit,
        formState:
        { errors }
    } = useForm({
        resolver: yupResolver(formSchema)
    });

    const submit = (data) => {
        console.log(data)
    }

    return (
        <Container>
            <Backgorund />
            <Content>
                <h1>KenzieHub</h1>
                <FormContainer>
                    <form onSubmit={handleSubmit(submit)}>
                        <h2>Acessar</h2>
                        <Input
                            register={register}
                            name="email"
                            error={errors.email?.message}
                            maxWidth={270}
                            marginBot={1}
                            icon={AiOutlineMail}
                            type="text"
                            placeholder="E-mail"
                        />
                        <Input
                            register={register}
                            name="password"
                            error={errors.password?.message}
                            maxWidth={270}
                            marginBot={1}
                            icon={RiLockPasswordLine}
                            type="password"
                            placeholder="Senha"
                        />
                        <Button type="submit" >Entrar</Button>
                        <p>Não possui uma conta? <Link to="/signup">Cadastre-se</Link> </p>
                    </form>
                </FormContainer>
            </Content>
        </Container>
    );
}
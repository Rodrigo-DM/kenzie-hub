import { Link, Redirect, useHistory } from "react-router-dom";
import { Container, Backgorund, Content, FormContainer } from "./styles";

import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

import Input from "../../components/Input";
import Button from "../../components/Button";

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import api from "../../services/api";
import { toast } from "react-toastify";

export function Login({ authenticated, setAuthenticated }) {
    const history = useHistory();


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
        api
            .post("/sessions", { ...data })
            .then((response) => {
                const { token, user } = response.data;

                localStorage.clear();

                localStorage.setItem("@KenzieHub:token", JSON.stringify(token));

                localStorage.setItem("@KenzieHub:user", JSON.stringify(user));

                setAuthenticated(true);

                return history.push("/");
            })
            .catch((_) =>
                toast.error("Email ou senha inválidos, tente novamente!")
            );
    }

    if (authenticated) {
        return <Redirect to="/" />
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
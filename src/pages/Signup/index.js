import { Link, useHistory, Redirect } from "react-router-dom";
import { Container, Backgorund, Content, FormContainer } from "./styles";

import { AiOutlineMail, AiOutlineContacts } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri"
import { CgProfile } from "react-icons/cg";
import { MdDescription } from "react-icons/md";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState } from "react";

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import api from "../../services/api";

import { toast } from "react-toastify";

export function Singup({ authenticated }) {
    const [nextForm, setNextForm] = useState(false);

    const next = () => {
        setNextForm(!nextForm);
    }

    const formSchema = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        email: yup
            .string()
            .required("Email obrigatório").email("Digite um email valido"),
        password: yup
            .string()
            .min(6, "No minimo 6 digitos")
            .required("Senha obrigatorio"),
        bio: yup.string().required("Campo obrigatorio"),
        contact: yup.string().required("Contato obrigatorio"),
        course_module: yup.string().required("Campo obrigatorio")
    });

    const {
        register,
        handleSubmit,
        formState:
        { errors }
    } = useForm({
        resolver: yupResolver(formSchema)
    });

    const history = useHistory();

    if (authenticated) {
        return <Redirect to="/" />
    }

    const submit = (data) => {
        api
            .post("/users", { ...data })
            .then((_) => {
                toast.success("Sucesso ao criar a conta");
                return history.push("/login");
            })
            .catch((_) =>
                toast.error("Erro ao tentar criar a conta, tente novamente!")
            );
    }

    return (
        <Container>
            <Content>
                <h1>KenzieHub</h1>
                <FormContainer>
                    <form onSubmit={handleSubmit(submit)}>
                        <h2>Cadastro</h2>
                        {!nextForm &&
                            <>
                                <Input
                                    register={register}
                                    name="name"
                                    error={errors.name?.message}
                                    maxWidth={270}
                                    marginBot={1}
                                    icon={CgProfile}
                                    type="text"
                                    placeholder="Name"
                                />
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
                            </>
                        }
                        {nextForm &&
                            <>
                                <Input
                                    register={register}
                                    name="bio"
                                    error={errors.bio?.message}
                                    maxWidth={270}
                                    marginBot={1}
                                    icon={MdDescription}
                                    type="text"
                                    placeholder="Bio"
                                />
                                <Input
                                    register={register}
                                    name="contact"
                                    error={errors.contact?.message}
                                    maxWidth={270}
                                    marginBot={1}
                                    icon={AiOutlineContacts}
                                    type="text"
                                    placeholder="Contato"
                                />

                                <select name="course_module" {...register("course_module")}>
                                    <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
                                    <option value="Segundo módulo (Frontend Avançado)">Segundo módulo</option>
                                    <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo</option>
                                    <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
                                </select>
                            </>
                        }
                        {
                            nextForm ?
                                <>
                                    <Button onClick={next}>Voltar</Button>
                                    <Button type="submit">Enviar</Button>
                                </>
                                :
                                <Button onClick={next}>Continuar</Button>
                        }
                        <p>Já possui uma conta? <Link to="/login">Acesse</Link> </p>
                    </form>
                </FormContainer>
            </Content>
            <Backgorund />
        </Container>
    );
}
import { Container } from "./styles";

import Button from "../../components/Button";
import Input from "../../components/Input";

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import api from "../../services/api";

import { toast } from "react-toastify";

export function AddWork() {
    const formSchema = yup.object().shape({
        title: yup.string().required("Campo obrigatório"),
        description: yup.string().required("Campo obrigatório"),
        deploy_url: yup.string().required("Contato obrigatório")
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
            .post("/users/works", { ...data })
            .then((_) => {
                window.location.reload();
                toast.success("Trabalho registrado com sucesso");
            })
            .catch((_) => {
                toast.error("Erro ao tentar registrar novo trabalho, tente novamente!")
            }
            );
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(submit)}>
                <h2>Novo Trabalho</h2>
                <Input
                    register={register}
                    name="title"
                    error={errors.title?.message}
                    maxWidth={270}
                    marginBot={1}
                    icon={""}
                    type="text"
                    placeholder="Title"
                />

                <Input
                    register={register}
                    name="description"
                    error={errors.description?.message}
                    maxWidth={270}
                    marginBot={1}
                    icon={""}
                    type="text"
                    placeholder="Descrição"
                />
                <Input
                    register={register}
                    name="deploy_url"
                    error={errors.deploy_url?.message}
                    maxWidth={270}
                    marginBot={1}
                    icon={""}
                    type="text"
                    placeholder="Link"
                />

                <Button type="submit">Enviar</Button>
            </form>
        </Container>
    );
}
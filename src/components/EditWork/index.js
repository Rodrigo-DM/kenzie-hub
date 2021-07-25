import { Container } from "./styles";

import Button from "../../components/Button";

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import api from "../../services/api";

import { toast } from "react-toastify";
import { useState } from "react";

export function EditWork({ id, title, description, link }) {
    const [initTitle, setInitTitle] = useState(title);
    const [initDescription, setInitDescription] = useState(description);
    const [initLink, setInitLink] = useState(link);


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
            .put(`/users/works/${id}`, { ...data })
            .then((_) => {
                toast.success("Trabalho atualizado com sucesso");
                window.location.reload();
            })
            .catch((err) => {
                console.log(err)
                toast.error("Erro ao tentar atualizar trabalho, tente novamente!")
            }
            );
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(submit)}>
                <h2>Editar Trabalho</h2>
                <input
                    {...register("title")}
                    type="text"
                    placeholder="Titulo"
                    value={initTitle}
                    onChange={(e) => setInitTitle(e.target.value)}
                />
                {errors.title?.message}
                <input
                    {...register("description")}
                    type="text"
                    placeholder="Descrição"
                    value={initDescription}
                    onChange={(e) => setInitDescription(e.target.value)}
                />
                {errors.description?.message}
                <input
                    {...register("deploy_url")}
                    type="text"
                    placeholder="Link"
                    value={initLink}
                    onChange={(e) => setInitLink(e.target.value)}
                />
                {errors.deploy_url?.message}

                <Button type="submit">Enviar</Button>
            </form>
        </Container>
    );
}
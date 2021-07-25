import { Container } from "./styles";

import Button from "../../components/Button";

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import api from "../../services/api";

import { toast } from "react-toastify";

export function EditTech({ id, title }) {

    const formSchema = yup.object().shape({
        title: yup.string().required("Campo obrigatório"),
        status: yup.string().required("Campo obrigatório"),
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
            .put(`/users/techs/${id}`, { ...data })
            .then((_) => {
                toast.success("Tecnologia atualizada com sucesso");
                window.location.reload();
            })
            .catch((err) => {
                console.log(err)
                toast.error("Erro ao tentar atualizar tecnologia, tente novamente!")
            }
            );
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(submit)}>
                <h2>Atualizar Status</h2>
                <input
                    {...register("title")}
                    type="text"
                    placeholder="Titulo"
                    value={title}
                />
                {errors.title?.message}
                <select name="status" {...register("status")}>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </select>
                {errors.status?.message}

                <Button type="submit">Enviar</Button>
            </form>
        </Container>
    );
}
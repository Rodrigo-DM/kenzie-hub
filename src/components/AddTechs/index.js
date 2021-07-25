import { Container } from "./styles";

import Input from "../../components/Input";
import Button from "../Button";

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import api from "../../services/api";

import { toast } from "react-toastify";

export function AddTechs() {
    const formSchema = yup.object().shape({
        title: yup.string().required("Campo obrigatório"),
        status: yup.string().required("Campo obrigatório")
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
            .post("/users/techs", { ...data })
            .then((_) => {
                window.location.reload();
                toast.success("Nova tecnologia registrada");
            })
            .catch((_) => {
                toast.error("Erro ao tentar registrar nova tecnologia, tente novamente!")
            }
            );
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(submit)}>
                <h2>Nova Tecnologia</h2>
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
import { Container } from "./styles";

import { AiOutlineContacts } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri"
import { CgProfile } from "react-icons/cg";

import Input from "../../components/Input";
import Button from "../../components/Button";

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import api from "../../services/api";

import { toast } from "react-toastify";

export function EditPerfil({ up, setUp }) {
    const formSchema = yup.object().shape({
        name: yup.string(),
        contact: yup.string(),
        old_password: yup.string(),
        password: yup.string()

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
            .put("/profile", { ...data })
            .then((_) => {
                setUp(!up);
                toast.success("Sucesso ao atualizar dados");
            })
            .catch((_) => {
                toast.error(`Erro ao tentar atualizar dados, tente novamente! Para atualizar sua senha é necessario a senha atual`);
            }
            );
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(submit)}>
                <h2>Atualizar Perfil</h2>
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
                    name="contact"
                    error={errors.contact?.message}
                    maxWidth={270}
                    marginBot={1}
                    icon={AiOutlineContacts}
                    type="text"
                    placeholder="Contato"
                />
                <Input
                    register={register}
                    name="old_password"
                    error={errors.old_password?.message}
                    maxWidth={270}
                    marginBot={1}
                    icon={RiLockPasswordLine}
                    type="password"
                    placeholder="Antiga Senha"
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

                <Button type="submit">Enviar</Button>
            </form>
        </Container>
    );
}
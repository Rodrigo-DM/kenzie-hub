/* eslint-disable react/jsx-no-target-blank */
import { Container } from "./styles";

import { BiEdit, BiTrash } from "react-icons/bi";

import UpWork from "../UpWork";

import { toast } from "react-toastify";
import api from "../../services/api";

function WorkCard({ work, permission }) {
    const { id, title, description, deploy_url } = work;

    const trash = (id) => {
        api
            .delete(`/users/works/${id}`)
            .then((_) => {
                toast.success("Trabalho deletado!");
            })
            .catch((_) => {
                toast.error("Erro ao tentar deletar trabalho, tente novamente!")
            }
            );
    }

    return (
        <Container>
            <p>{title}</p>
            <p>{description}</p>
            <a href={deploy_url} target="_blank">Acessar</a>
            {permission && <UpWork id={id} title={title} description={description} link={deploy_url}>
                <BiEdit />
            </UpWork>}
            {permission && <button onClick={() => trash(id)}>
                <BiTrash />
            </button>}
        </Container>
    );
}

export default WorkCard;
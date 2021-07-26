import { Container, Content } from "./styles";

import UpTech from "../UpTech";

import { BiEdit, BiTrash } from "react-icons/bi";

import api from "../../services/api";
import { toast } from "react-toastify";

function TechCard({ tech, permission, up, setUp }) {
    const { id, title, status } = tech;

    const trash = (id) => {
        api
            .delete(`/users/techs/${id}`)
            .then((_) => {
                setUp(!up);
                toast.success("Tecnologia deletada!");
            })
            .catch((_) => {
                toast.error("Erro ao tentar deletar tecnologia, tente novamente!")
            }
            );
    }

    return (
        <Container>
            <p>{title}</p>
            <p>{status}</p>
            <Content>
                {
                    permission &&
                    <UpTech id={id} title={title} up={up} setUp={setUp}>
                        <BiEdit />
                    </UpTech>
                }
                {permission && <button onClick={() => trash(id)}>
                    <BiTrash />
                </button>}
            </Content>
        </Container>
    );
}

export default TechCard;
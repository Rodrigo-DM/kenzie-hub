/* eslint-disable react/jsx-no-target-blank */
import { Container } from "./styles";

import { CgProfile } from "react-icons/cg";

import UpPerfil from "../UpPerfil";

function UserCard({ user, permission, up, setUp }) {
    const { avatar_url, bio, name, contact, course_module } = user;



    return (
        <Container>
            <figure>
                {avatar_url ? <img src={avatar_url} alt="profile" /> : <CgProfile />}
                <figcaption>{name}</figcaption>
            </figure>
            <div>
                <p>{bio}</p>
                <p>{course_module}</p>
            </div>
            <a href={contact} target="_blank">{contact}</a>
            {permission && <UpPerfil up={up} setUp={setUp} >Editar</UpPerfil>}
        </Container>
    );
}

export default UserCard;
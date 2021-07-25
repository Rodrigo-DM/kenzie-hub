import { Container, BoxLink } from "./styles";

import { CgProfile } from "react-icons/cg";
import { AiFillCaretRight } from "react-icons/ai";

import { Link } from "react-router-dom";

function ProfileCard({ profile }) {
    const { id, name, bio, avatar_url } = profile;
    const nameStr = name.length > 15 ? name.substring(0, 13) + '...' : name;
    return (
        <Container>
            <figure>
                {avatar_url ? <img src={avatar_url} alt="profile" /> : <CgProfile />}
                <figcaption>{nameStr.toUpperCase()}</figcaption>
            </figure>
            <div>
                <p>{bio}</p>
                <p>{profile.techs.map(tech => <span key={tech.id}>{tech.title + ', '}</span>)}</p>
            </div>
            <Link to={`/user/${id}`}>
                <BoxLink>
                    <span>
                        <AiFillCaretRight />
                    </span>
                </BoxLink>
            </Link>
        </Container>
    );
}

export default ProfileCard;
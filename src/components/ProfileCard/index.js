import { Container, BoxLink } from "./styles";

// import { CgProfile } from "react-icons/cg";
import { AiFillCaretRight } from "react-icons/ai";

import { Link } from "react-router-dom";

function ProfileCard({ profile }) {
    const { name, bio, avatar_url } = profile;
    console.log(name)
    return (
        <Container>
            <figure>
                {avatar_url ? <img src={avatar_url} alt="profile" /> : <img src="https://picsum.photos/100" alt="profile" />}
                <figcaption>{name}</figcaption>
            </figure>
            <div>
                <p>{bio}</p>
                <p>React, Native, Java script, Html, css, redux</p>
            </div>
            <Link to="/user">
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
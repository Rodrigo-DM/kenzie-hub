import { Container, Content, BoxButtons } from "./styles";

import Button from "../../components/Button";

import ProfileCard from "../ProfileCard";

import { useEffect, useState } from "react";

import api from "../../services/api";

function Profiles() {
    const [profiles, setProfiles] = useState([]);
    const [nextPage, setNextPage] = useState('');
    const [page, setPage] = useState(1);
    const [techInput, setTechInput] = useState('');

    useEffect(() => {
        api
            .get(`/users?perPage=15&page=${page}&tech=${techInput}`)
            .then((response) => {
                setNextPage(response.headers.nexturl);
                setProfiles(response.data)
            })
            .catch((err) =>
                console.log(err)
            );
    }, [page, techInput]);

    const upPage = () => {
        if (nextPage !== null) {
            setPage(page + 1);
        }
    }

    const downPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    const handleSubmit = (data) => {
        data.preventDefault();
        setTechInput(data.target[0].value);
    }

    return (
        <>
            <Content>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Tecnologia"
                    />
                    <Button type="submit">Filtrar</Button>
                </form>
            </Content>

            <Container>
                {
                    profiles.map(profile => <ProfileCard key={profile.id} profile={profile} />)
                }
                <BoxButtons>
                    <Button onClick={downPage}>Voltar</Button>
                    <Button onClick={upPage}>Avançar</Button>
                </BoxButtons>
            </Container>
        </>
    );
}

export default Profiles;
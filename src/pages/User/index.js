import { Container } from "./styles";

import { useParams } from "react-router-dom";
import { Bar } from "../../components/Bar";

import UserCard from "../../components/UserCard";
import TechsWorks from "../../components/TechsWorks";
import api from "../../services/api";

import { useEffect, useState } from "react";

export function User({ allowed }) {
    const { id } = useParams();
    const [user, setUser] = useState({ techs: [], works: [] })

    const [permission, setPermission] = useState(false);

    useEffect(() => {
        if (allowed.id === id) {
            setPermission(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, allowed])

    useEffect(() => {
        api
            .get(`/users/${id}`)
            .then((response) => {
                setUser(response.data)
            })
            .catch((err) =>
                console.log(err)
            );
    }, [id]);

    return (
        <>
            <Bar allowed={allowed} />
            <Container>
                <UserCard user={user} permission={permission} />
                <TechsWorks techs={user.techs} works={user.works} permission={permission} />
            </Container>
        </>
    );
}
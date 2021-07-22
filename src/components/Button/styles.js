import styled from "styled-components";

export const Container = styled.button`
    color: var(--white);
    background-color: var(--dark-blue);
    width: 200px;
    height: 30px;
    border-radius: 10px;
    transition: .4s;

    &:hover {
        background-color: var(--blue);
    }
`;
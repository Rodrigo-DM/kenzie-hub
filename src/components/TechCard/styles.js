import styled from "styled-components";

export const Container = styled.li`
    margin: 1rem 0;

    p:nth-child(1) {
        margin-bottom: .2rem;
        font-weight: bold;
    }
`;

export const Content = styled.div`
    margin-top: 5px;
    display: flex;
    justify-content: space-evenly;

    div button {
        background-color: transparent;
    }

    button {
        color: var(--blue);
        background-color: transparent;
    }
`;
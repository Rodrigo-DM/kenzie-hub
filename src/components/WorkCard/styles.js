import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    min-height: 100px;
    width: 90%;
    margin-top: 1rem;
    text-align: center;
    background-color: var(--white);
    border-radius: 20px;
    padding: 10px 40px;

    p {
        margin-bottom: 1rem;
    }

    p:nth-child(1) {
        font-weight: bold;
    }

    div button {
        background-color: transparent;
    }

    button, a {
        color: var(--blue);
        font-weight: bold;
        background-color: transparent;
    }

    div {
        position: absolute;
        top: 10px;
        right: 20px;
    }

    button:nth-child(5) {
        position: absolute;
        bottom: 10px;
        right: 20px;
    }
`;
import styled from "styled-components";

export const Container = styled.div`
    min-height: 300px;
    width: 270px;
    margin: 0 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 20px;
    box-shadow: 4px 4px 10px 4px rgba(0,0,0,0.5);
    background-color: var(--white);

    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    figcaption {
        font-weight: bold;
    }

    p {
        margin: 10px 0;
    }

    div p:nth-child(2) {
        font-weight: bold;
    }

    a {
        color: var(--blue);
    }

    a[href^="/editar"] {
        margin-top: 1rem;
        font-weight: bold;
    }
`;
import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    min-height: 100px;
    width: 100%;
    max-width: 800px;
    margin-top: 1rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--white);
    border-radius: 20px;
    padding: 10px 45px;

    p:nth-child(2) {
        margin-top: 1rem;
        font-weight: bold;
    }

    a {
        color: var(--blue);
    }

    img {
        border-radius: 50%;
    }

    figcaption {
        font-weight: bold;
    }
`;

export const BoxLink = styled.div`
    height: 100%;
    width: 40px;
    border-radius: 0 20px 20px 0;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--gray-back);

    &:hover {
        background-color: var(--blue);
    }

    &:hover span:nth-child(1){
        color: var(--gray-back);
    }
`;
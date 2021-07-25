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
    justify-content: flex-start;
    background-color: var(--white);
    border-radius: 20px;
    padding: 10px 45px;

    p:nth-child(1) {
        word-wrap: break-word;
        max-width: 400px;
    }

    p:nth-child(2) {
        margin-top: 1rem;
        font-weight: bold;
    }

    a {
        color: var(--blue);
    }

    figure {
        width: 150px;
        margin: 0 40px 0 0;
        
        svg {
            font-size: 100px;
        }
    }


    img {
        width: 100px;
        height: 100px;
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
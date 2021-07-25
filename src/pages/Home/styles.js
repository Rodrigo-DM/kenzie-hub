import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 800px;
    margin-top: 1rem;
    background-color: var(--white);
    border-radius: 20px;
    padding: 20px 45px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    }
`;
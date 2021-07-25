import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
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

export const BoxButtons = styled.div`
    width: 450px;
    margin: 20px 0; 
    display: flex;
    justify-content: space-between;
`;

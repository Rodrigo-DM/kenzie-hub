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
    justify-content: center;
    text-align: center;

    input {
        margin: 0 10px 10px 0; 
        padding: 0 10px;
        width: calc(250px + 10vw);
        height: 30px;
        border: 2px solid var(--blue-back);
        background-color: var(--white);
        border-radius: 10px;
    }

    @media screen and (min-width: 768px) {
        //width: calc(300px + 10vw);
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

        input {
            margin-botom: 0;
        }
    }
`;

export const BoxButtons = styled.div`
    width: 450px;
    margin: 20px 0; 
    display: flex;
    justify-content: space-between;
`;

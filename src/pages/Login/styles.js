import styled from "styled-components";
import loginImage from "../../assets/login.svg";

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
`;

export const Backgorund = styled.div`
    @media screen and (min-width: 800px) {
        flex: 1;
        background: url(${loginImage}) no-repeat center, var(--dark-blue);
        background-size: contain;
    }
`;

export const Content = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (min-width: 800px) {
        width: 40%;
    }

    h1 {
        text-shadow: 2px 2px 0px var(--white), 5px 4px 0px rgba(0,0,0,0.15);
        color: var(--dark-blue);
    }
`;

export const FormContainer = styled.div`
    width: 100%;
    max-width: 400px;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 4px 4px 10px 4px rgba(0,0,0,0.5);
    background-color: var(--white);
    
    form {
        height: 350px;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        text-align: center;

        h2 {
            color: var(--dark-blue);
            margin-bottom: 3rem;
        }

        button {
            margin: 2rem 0 1rem 0;
        }

        a {
            color: var(--blue);
        }
    }
`;
import styled from "styled-components";
import singupImage from "../../assets/signup.svg";

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
`;

export const Backgorund = styled.div`
    @media screen and (min-width: 800px) {
        padding: 10px;
        flex: 1;
        background: url(${singupImage}) no-repeat center, var(--dark-blue);
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
        min-height: 350px;
        padding: 1rem 0;
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
            margin: 1rem 0 0 0;
        }

        a {
            color: var(--blue);
        }

        p {
            margin-top: 10px;
        }

        select {
            width: 100%;
            padding: 0 10px;
            max-width: 270px;
            height: 30px;
            border: 2px solid var(--blue-back);
            background-color: var(--white);
            border-radius: 10px;
        }
    }
`;
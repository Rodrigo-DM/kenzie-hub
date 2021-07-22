import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    text-align: left;
    display: flex;
    justify-content: center;
`;

export const InputContainer = styled.div`
    background: var(--white);
    border-radius: 10px;
    border: 2px solid var(--blue-back);
    color: var(--gray);
    padding: 0 10px;
    margin-bottom: 1rem;
    height: 30px;
    width: 100%;
    max-width: 270px;
    display: flex;
    align-items: center;
    transition: .4s;

    input {
        width: 100%;
        margin-left: 8px;
        background: transparent;
        color: var(--black);

        &::placeholder {
            color: var(--gray);
        }
    }
`;
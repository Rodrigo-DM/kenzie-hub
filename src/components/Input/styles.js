import styled, { css } from "styled-components";

export const Container = styled.div`
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        color: red;
        margin-bottom: 10px;
    }
`;

export const InputContainer = styled.div`
    background: var(--white);
    border-radius: 10px;
    border: 2px solid var(--blue-back);
    color: var(--gray);
    padding: 0 10px;
    margin-bottom: ${(props) => (`${props.marginBot}rem`)};
    height: 30px;
    width: 100%;
    max-width: ${(props) => (`${props.maxWidth}px`)};
    display: flex;
    align-items: center;
    transition: .4s;

    ${(props) => props.isErrored && css`
        border: 2px solid red;
        margin-bottom: 0;

        svg {
            color: red;
        }
    `}

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
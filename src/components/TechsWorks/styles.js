import styled from "styled-components";

export const Container = styled.div`
    height: calc(100vh - 80px);
    width: 1000px;
    margin: 0 10px;
    border-radius: 20px 20px 0 0;
    overflow: hidden;
    background-color: var(--gray-back);
`;

export const Bar = styled.div`
    position: relative;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    background-color: var(--dark-blue);

    div {
        position: absolute;
        right: 20px;

        button {
            background-color: transparent;
        }

        svg {
            color: var(--white);
            font-size: 32px;
        }
    }
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;
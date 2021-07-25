import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    
    input, select {
        margin-bottom: 1rem;
        width: 100%;
        padding: 0 10px;
        max-width: 270px;
        height: 30px;
        border: 2px solid var(--blue-back);
        background-color: var(--white);
        border-radius: 10px;
    }

    h2 {
        margin: 20px 0;
        color: var(--dark-blue);
    }
`;
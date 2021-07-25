import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Bar = styled.div`
    height: 60px;
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    background-color: var(--dark-blue); 
 
    div {
        height: 100%;
        width: 100%;
        max-width: 1300px;
        display: flex; 
        align-Items: center;
        justify-content: space-between;
    }

    h1 {
        text-shadow: 2px 2px 0px #FFFFFF, 5px 4px 0px rgba(0,0,0,0.15), 0px 0px 12px rgba(255,255,255,0.4);
        color: var(--blue);
        @media screen and (max-width: 768px) {
            font-size: 2rem;
        }
    }

    a {
        font-weight: 700;
        color: var(--white);
    }
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
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
    position: relative;
    width: 100%;
    max-width: 800px;
    margin-top: 1rem;
    background-color: var(--white);
    border-radius: 20px;
    padding: 20px 45px;
    display: flex;
    flex-direction: column;
    align-items: center;

    figure {
        width: 100px;
        text-align: center;
        margin: 0 0 20px 0;
    }
    
    img {
        margin: 0 10px;
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    figcaption {
        font-weight: bold;
    }

    div p:nth-last-child(1) {
        margin-top: 20px;
        font-weight: bold;
    }

    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

        figure {
            margin: 0 40px 0 0;
        }
    }
`;

export const Right = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    height: 100%;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 20px 20px 0;
    background-color: var(--gray-back);
    cursor: pointer;
    
    a {
        color: var(--blue);
    }

    &:hover {
        background-color: var(--blue);
    }

    &:hover a {
        color: var(--gray-back);
    }

`;
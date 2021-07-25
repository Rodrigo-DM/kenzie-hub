import styled from "styled-components";

export const Container = styled.div`
    height: 60px;
    width: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: var(--dark-blue); 

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
    button {
        color: var(--white);
        background-color: transparent;
    }
    
    ul li a{
        color: var(--dark-blue);
    }
    
    ul li {
        padding: 10px 10px;
    }

    ul li:hover {
        background: var(--gray-back);
    }

    ul {
        position: absolute;
        background-color: var(--white);
        z-index: 1;
    }
`;
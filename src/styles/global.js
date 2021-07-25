import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        list-style: none;
    }

    :root {
        --dark-blue: #1C40A7;
        --blue: #0679FB;
        --blue-back: #E8F3FE;
        --gray: #C6C6C6;
        --gray-back: #F5F5F5;
        --white: #FFFF;
        --black: #000;
        --title: 'Russo One', sans-serif;
        --text: 'Roboto', sans-serif;
    }

    body {
        background: var(--blue-back);
        color: var(--black);
    }

    h1 {
        font-family: var(--title);
        font-size: 3rem;
    }

    h2 {
        font-family: var(--text);
        font-size: 1.5rem;
    }
    
    p, span, a, button {
        font-family: var(--text);
        font-size: 1rem;
    }
    
    button {
        font-weight: bold;
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
        outline: none;
    }

    :root {
        --dark-blue: #0679FB;
        --blue: #0679FB;
        --blue-back: #0679FB;
        --gray: #C6C6C6;
        --gray-back: #F5F5F5;
        --white: #FFFF;
        --black: #0000;
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
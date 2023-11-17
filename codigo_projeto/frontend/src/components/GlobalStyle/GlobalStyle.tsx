import { createGlobalStyle } from 'styled-components';

import 'typeface-inter';
// exportando estilos globais
export const GlobalStyle = createGlobalStyle`

    :root {
        --green: #00A868;
        --gray: #909090;
        --white: #fff;
        --primary-font: Inter, 'sans-serif';
    }

    body {
        margin: 0;
        padding: 0;
    }

    body * {
        box-sizing: border-box;
        font-family: Inter, 'sans-serif';
    }

    body button, body a {
        cursor: pointer;
    }
`
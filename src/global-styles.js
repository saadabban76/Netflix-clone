import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body{
        font-family: 'Helvetica Neue', Arial, Helvetica, sans-serif;
        -webkit-font-smoothing:antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
        width:100vw;
        background-color:black;
        color:#333333;
        font-size:16px;
    } 
`
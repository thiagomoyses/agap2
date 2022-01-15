import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        background: #f5f5f5;
        font-size: 14px;
        color: 333;
        font-family: sans-serif;
    }

    button{
        background-color: none;
        border: none;
        outline: none;
    }

    a{
        text-decoration: none;
        outline: none;
    }


`

export default globalStyle;
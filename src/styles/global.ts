import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`

    /* @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap'); */
    @import url('https://fonts.googleapis.com/css2?family=Creepster&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Creepster', cursive;
    }

    img {
        border: 1px solid #EE2282;
        width: 100%;
    }

    h1 {
        color: #EE2282;
    }

    li{
        list-style-type: none;
        text-decoration:none;
    }
    a{
        text-decoration:none
    }
`

export default globalStyle ;
import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    background: -webkit-gradient(linear,right top,left top,from(#fd929f),to(#bfe9ff));
    background: linear-gradient(270deg , #fd929f,#bfe9ff);
    opacity: .8;
    height: 65rem;
    margin-top: 3rem;
    border-radius: 20px;
    display: table;
    box-shadow: 0 2rem 4rem rgb(58 57 58 / 47%);
    width: 75%;
`

export default Container;
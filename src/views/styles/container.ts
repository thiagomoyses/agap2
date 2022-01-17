import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: linear-gradient(300deg , #A9CBD7,#bfe9ff);
    opacity: .9;
    height: fit-content;
    margin-top: 10%;
    border-radius: 20px;
    display: table;
    box-shadow: 0px 0px 10px 20px #D7F3F1;
    width: 75%;
`

export const ContainerLeft = styled.div`
    width: 40%;
    display: table-cell;
    vertical-align: middle;
    padding: 2rem 2rem 2rem 4rem;
`

export const ContainerRight = styled.div`
    display: table-cell;
    padding: 1rem 2rem;
`

export const ContainerRightTitleDescription = styled.div`
    padding-bottom: 70px;
    text-align: center;
`

export const ContainerRighDetailsTItleDescription = styled.div`
    padding-bottom: 70px;
    text-align: center;
    h1{
        font-size: 30px;
        padding-bottom: 50px;
    };
`

export const SummaryEpisodeDescription = styled.div`

    overflow-y: scroll;
    height: 200px;

`

export const ContainerRightEpisodeList = styled.div`
    margin: 0;
    padding: 10px;
    box-sizing: inherit;
    height: 49%;
    overflow-y: scroll;
    background-color: #d7f3f1;
`
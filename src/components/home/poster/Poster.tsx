import PosterContainer from "./styles";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ApplicationState } from "store";

const PosterImage = () => {

    const PosterPic = useSelector((state: ApplicationState) => state.poster.teste)
    const dispatch = useDispatch();

    useEffect(() => {
        
    });

    return (
        <PosterContainer>
            <h1>{ PosterPic }</h1>
        </PosterContainer>
    );

}


export default PosterImage;
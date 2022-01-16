import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPoster } from "redux/effects/home/poster/PosterEffect";
import { AppState } from 'redux/store'

import PosterContainer from "./styles";

const PosterImage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPoster());
    }, [dispatch]);

    const poster = useSelector((state: AppState) => state.poster.poster.image.original);

    return (
        <PosterContainer>
            <img src={poster} alt="power-puff"/> 
        </PosterContainer>
    );

}


export default PosterImage;
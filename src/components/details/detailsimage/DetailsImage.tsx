import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "redux/store";
import { getDetailsImage } from "redux/effects/detalis/detailsimage/DetailsImageEffect";

import DetailsImageContainer from "./styles";

const DetailsImage = () => {

    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetailsImage(id))
    });

    const image = useSelector((state: AppState) => state.detailsImage.image.image.original);
    
    const doneImage = image ? <img src={image} alt="power-puff"/> : false;

    return(
        <DetailsImageContainer>
            { doneImage } 
        </DetailsImageContainer>
    );
}

export default DetailsImage;
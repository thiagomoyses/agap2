import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "redux/store";
import { getDetailsDescription } from "redux/effects/detalis/detailsdescription/DetailsDescriptionEffect";

import { DetailsTitleContainer } from "./styles";

const DetailsDescription = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetailsDescription(id))
    })

    const description = useSelector((state: AppState) => state.detailsDescription.sumary.summary);

    var cleanDescription = '';

    if (description){
        cleanDescription = description.replace(/(<([^>]+)>)/ig,"")
    } else{
        cleanDescription = '';
    }

    return (
        <DetailsTitleContainer >
            <h1>{ cleanDescription }</h1>
        </DetailsTitleContainer>
    );


}

export default DetailsDescription
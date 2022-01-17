import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "redux/store";
import { getDetailsTitle } from "redux/effects/detalis/detailtitle/DetailsTitleEffect";

import { DetailsTitleContainer } from "./styles";

const DetailsTitle = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetailsTitle(id))
    })

    const title = useSelector((state: AppState) => state.detailsTitle.name.name);

    const doneTitle = title ? <h1>{ title }</h1> : false;

    return (
        <DetailsTitleContainer>
            { doneTitle }
        </DetailsTitleContainer>
    );


}

export default DetailsTitle;
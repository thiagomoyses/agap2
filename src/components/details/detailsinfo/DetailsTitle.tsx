import { useSelector } from "react-redux";
import { AppState } from "redux/store";

import { DetailsTitleContainer } from "./styles";

const DetailsTitle = () => {

    const title = useSelector((state: AppState) => state.episodeDetails.request.name);

    const doneTitle = title ? <h1>{ title }</h1> : false;

    return (
        <DetailsTitleContainer>
            { doneTitle }
        </DetailsTitleContainer>
    );
}

export default DetailsTitle;
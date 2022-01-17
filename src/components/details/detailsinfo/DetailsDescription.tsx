import { useSelector } from "react-redux";
import { AppState } from "redux/store";

import { DetailsTitleContainer } from "./styles";

const DetailsDescription = () => {

    const description = useSelector((state: AppState) => state.episodeDetails.request.summary);

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
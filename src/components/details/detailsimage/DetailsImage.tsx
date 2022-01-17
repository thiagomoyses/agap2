import { useSelector } from "react-redux";
import { AppState } from "redux/store";

import DetailsImageContainer from "./styles";

const DetailsImage = () => {

    const image = useSelector((state: AppState) => state.episodeDetails.request.image.original);
    const doneImage = image ? <img src={image} alt="power-puff"/> : false;

    return(
        <DetailsImageContainer>
            { doneImage } 
        </DetailsImageContainer>
    );
}

export default DetailsImage;
import { useSelector } from "react-redux";
import { AppState } from "redux/store";

const DetailsImage = () => {

    const image = useSelector((state: AppState) => state.episodeDetails.request.image.original);
    const doneImage = image ? <img src={image} alt="power-puff"/> : false;

    return(
        <div>
            { doneImage } 
        </div>
    );
}

export default DetailsImage;
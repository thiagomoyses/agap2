import { useSelector } from "react-redux";
import { AppState } from 'redux/store'

import PosterContainer from "./styles";

const PosterImage = () => {

    const poster = useSelector((state: AppState) => state.tvShowPage.request.image.original);
    
    return (
        <PosterContainer>
            <img src={poster} alt="poster" />
        </PosterContainer>
    );

}


export default PosterImage;
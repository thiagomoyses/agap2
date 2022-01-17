import { useSelector } from "react-redux";
import { AppState } from 'redux/store'

const PosterImage = () => {

    const poster = useSelector((state: AppState) => state.tvShowPage.request.image.original);
    
    return (
            <img src={poster} alt="poster" />
    );

}


export default PosterImage;
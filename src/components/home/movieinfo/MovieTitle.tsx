import { useSelector } from "react-redux";
import { AppState } from 'redux/store'

const MovieTitle = () => {

    const movieTitle = useSelector((state: AppState) => state.tvShowPage.request.name);

    return (
        <div>
            <h1>{ movieTitle }</h1>
        </div>
    );

}

export default MovieTitle;
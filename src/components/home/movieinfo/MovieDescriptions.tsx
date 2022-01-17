import { useSelector } from "react-redux";
import { AppState } from 'redux/store'

const MovieDescription = () => {


    const movieDescription = useSelector((state: AppState) => state.tvShowPage.request.summary);

    const cleanMovieDescription = movieDescription.replace(/(<([^>]+)>)/ig,"")

    return (
        <h2>{ cleanMovieDescription }</h2>
    );
}

export default MovieDescription;
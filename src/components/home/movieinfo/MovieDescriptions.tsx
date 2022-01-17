import { useSelector } from "react-redux";
import { AppState } from 'redux/store'

import { MovieTitleContainer } from "./styles";

const MovieDescription = () => {


    const movieDescription = useSelector((state: AppState) => state.tvShowPage.request.summary);

    const cleanMovieDescription = movieDescription.replace(/(<([^>]+)>)/ig,"")

    return (
        <MovieTitleContainer>
            <h2>{ cleanMovieDescription }</h2>
        </MovieTitleContainer>
    );
}

export default MovieDescription;
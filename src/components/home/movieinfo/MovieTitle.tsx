import { useSelector } from "react-redux";
import { AppState } from 'redux/store'

import { MovieTitleContainer } from "./styles";

const MovieTitle = () => {

    const movieTitle = useSelector((state: AppState) => state.tvShowPage.request.name);

    return (
        <MovieTitleContainer>
            <h1>{ movieTitle }</h1>
        </MovieTitleContainer>
    );

}

export default MovieTitle;
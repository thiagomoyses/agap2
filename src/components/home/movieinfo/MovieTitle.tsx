import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieTitle } from "redux/effects/home/movietitle/MovieTitleEffect";
import { AppState } from 'redux/store'

import { MovieTitleContainer } from "./styles";

const MovieTitle = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieTitle());
    }, [dispatch]);

    const movieTitle = useSelector((state: AppState) => state.movieTitle.name.name);

    return (
        <MovieTitleContainer>
            <h1>{ movieTitle }</h1>
        </MovieTitleContainer>
    );

}

export default MovieTitle;
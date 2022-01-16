import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from 'redux/store'

import { getMovieDescription } from "redux/effects/home/moviedescription/MovieDescriptionEffects";

import { MovieTitleContainer } from "./styles";

const MovieDescription = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieDescription());
    }, [dispatch]);

    const movieDescription = useSelector((state: AppState) => state.movieDescription.summary.summary);
    

    const cleanMovieDescription = movieDescription.replace(/(<([^>]+)>)/ig,"")

    return (
        <MovieTitleContainer>
            <h2>{ cleanMovieDescription }</h2>
        </MovieTitleContainer>
    );

}

export default MovieDescription;
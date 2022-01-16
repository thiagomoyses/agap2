import { GET_MOVIE_DESCRIPTION, MovieDescriptionAtionTypes } from "redux/types/home/moviedescription/MovieDescriptionTypes";
import { IMovieDescription } from 'redux/interfaces/home/moviedecription/MovieDescriptionInterface'

export const getMovieDescriptionAction = (summary: IMovieDescription): MovieDescriptionAtionTypes => {

    return {
        type: GET_MOVIE_DESCRIPTION,
        payload: summary
    };
};
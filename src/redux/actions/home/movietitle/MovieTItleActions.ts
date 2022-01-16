import { GET_MOVIE_TITLE, MovieTitleAtionTypes } from "redux/types/home/movietitle/MovieTitleTypes";
import { IMovieTitle } from "redux/interfaces/home/movietitle/MovieTitleInterface";

export const getMovieTitleAction = (title: IMovieTitle): MovieTitleAtionTypes => {

    return{
        type: GET_MOVIE_TITLE,
        payload: title
    };

};
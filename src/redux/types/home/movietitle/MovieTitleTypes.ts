import { IMovieTitle } from "redux/interfaces/home/movietitle/MovieTitleInterface";

export const GET_MOVIE_TITLE = 'GET_MOVIE_TITLE';

export interface IGetMovieTitleStateType{
    name: IMovieTitle,
}

interface GetMovieTitleAction{
    type: typeof GET_MOVIE_TITLE,
    payload: IMovieTitle
}


export type MovieTitleAtionTypes = GetMovieTitleAction;
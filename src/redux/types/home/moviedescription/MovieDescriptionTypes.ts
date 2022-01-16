import { IMovieDescription } from "redux/interfaces/home/moviedecription/MovieDescriptionInterface";

export const GET_MOVIE_DESCRIPTION = 'GET_MOVIE_DESCRIPTION'

export interface IGetMovieDescriptionStateType {
    summary: IMovieDescription,
}

interface GetMovieDescriptionActionType{
    type: typeof GET_MOVIE_DESCRIPTION,
    payload: IMovieDescription
}

export type MovieDescriptionAtionTypes = GetMovieDescriptionActionType;
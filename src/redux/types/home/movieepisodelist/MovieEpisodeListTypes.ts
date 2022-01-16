import { IMovieEpisodeList } from "redux/interfaces/home/movieepisodelist/MovieEpisodeList";

export const GET_MOVIE_EPISODE_LIST = 'GET_MOVIE_EPISODE_LIST';

export interface GetMovieEpisodeListStateType{
    episodes: IMovieEpisodeList[]
}

interface GetMovieEpisodeListActionType{
    type: typeof GET_MOVIE_EPISODE_LIST;
    payload: IMovieEpisodeList[];
}

export type MovieEpisodeListActionType = GetMovieEpisodeListActionType;
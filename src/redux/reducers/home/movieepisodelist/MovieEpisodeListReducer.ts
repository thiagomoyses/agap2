import {
    GET_MOVIE_EPISODE_LIST,
    GetMovieEpisodeListStateType,
    MovieEpisodeListActionType
  } from "redux/types/home/movieepisodelist/MovieEpisodeListTypes";

  const initialStateGetMovieEpisodeList: GetMovieEpisodeListStateType = {
    episodes: []
  };

  export const getMovieEpisodeListReducer = (
    state = initialStateGetMovieEpisodeList,
    action: MovieEpisodeListActionType
  ): GetMovieEpisodeListStateType => {
    switch (action.type) {
      case GET_MOVIE_EPISODE_LIST:
        return {
          ...state,
          episodes: action.payload
        };
      default:
        return state;
    }
  };
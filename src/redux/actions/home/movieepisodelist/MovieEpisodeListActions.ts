import { 
        GET_MOVIE_EPISODE_LIST, 
        MovieEpisodeListActionType 
} from "redux/types/home/movieepisodelist/MovieEpisodeListTypes";

import { IMovieEpisodeList } from "redux/interfaces/home/movieepisodelist/MovieEpisodeList";

export const getMovieEpisodeListAction = (episodes: IMovieEpisodeList[]): MovieEpisodeListActionType => {
    return {
      type: GET_MOVIE_EPISODE_LIST,
      payload: episodes
    };
  };
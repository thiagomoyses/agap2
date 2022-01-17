import { combineReducers } from "redux";
import { getMovieEpisodeListReducer } from "./home/movieepisodelist/MovieEpisodeListReducer";
import { getTvShowPageReducer } from "./home/TvShowPageReducer"
import { getEpisodeDetailsReducer } from "./details/EpisodeDetailsReducer";

const rootReducer = combineReducers({
    episodeList: getMovieEpisodeListReducer,
    tvShowPage: getTvShowPageReducer,
    episodeDetails: getEpisodeDetailsReducer,
});

export default rootReducer;
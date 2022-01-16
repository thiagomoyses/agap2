import { combineReducers } from "redux";
import { getPostersReducer } from "./home/poster/PosterReducer";
import { getMovieTitleReducer } from "./home/movietitle/MovieTitleReducer";
import { getmovieDescriptionReducer } from "./home/moviedescription/MovieDescriptionReducer";
import { getMovieEpisodeListReducer } from "./home/movieepisodelist/MovieEpisodeListReducer";

const rootReducer = combineReducers({
    poster: getPostersReducer,
    movieTitle: getMovieTitleReducer,
    movieDescription: getmovieDescriptionReducer,
    episodeList: getMovieEpisodeListReducer,
});

export default rootReducer;
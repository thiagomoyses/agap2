import { combineReducers } from "redux";
import { getPostersReducer } from "./home/poster/PosterReducer";
import { getMovieTitleReducer } from "./home/movietitle/MovieTitleReducer";

const rootReducer = combineReducers({
    poster: getPostersReducer,
    movieTitle: getMovieTitleReducer,
});

export default rootReducer;
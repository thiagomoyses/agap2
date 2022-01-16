import { combineReducers } from "redux";
import { getPostersReducer } from "./home/poster/PosterReducer";
import { getMovieTitleReducer } from "./home/movietitle/MovieTitleReducer";
import { getmovieDescriptionReducer } from "./home/moviedescription/MovieDescriptionReducer";

const rootReducer = combineReducers({
    poster: getPostersReducer,
    movieTitle: getMovieTitleReducer,
    movieDescription: getmovieDescriptionReducer,
});

export default rootReducer;
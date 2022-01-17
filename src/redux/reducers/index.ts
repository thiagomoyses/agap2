import { combineReducers } from "redux";
import { getPostersReducer } from "./home/poster/PosterReducer";
import { getMovieTitleReducer } from "./home/movietitle/MovieTitleReducer";
import { getmovieDescriptionReducer } from "./home/moviedescription/MovieDescriptionReducer";
import { getMovieEpisodeListReducer } from "./home/movieepisodelist/MovieEpisodeListReducer";
import { getDetailsImage } from "./details/detailsimage/DetailsImageReducer";
import { getDetailsTitleReducer } from "redux/reducers/details/detailstitle/DetailsTitleReducer"
import { getDetailsDescriptionReducer } from "./details/detailsdescription/DetailsDescriptionReducer";

const rootReducer = combineReducers({
    poster: getPostersReducer,
    movieTitle: getMovieTitleReducer,
    movieDescription: getmovieDescriptionReducer,
    episodeList: getMovieEpisodeListReducer,
    detailsImage: getDetailsImage,
    detailsTitle: getDetailsTitleReducer,
    detailsDescription: getDetailsDescriptionReducer,
});

export default rootReducer;
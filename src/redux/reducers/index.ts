import { combineReducers } from "redux";
import { getPostersReducer } from "./PosterReducer";

const rootReducer = combineReducers({
    poster: getPostersReducer
});

export default rootReducer;
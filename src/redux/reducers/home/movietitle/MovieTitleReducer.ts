import {    GET_MOVIE_TITLE, 
            IGetMovieTitleStateType,
            MovieTitleAtionTypes
} from "redux/types/home/movietitle/MovieTitleTypes";

const initialStateGetMovieTitle: IGetMovieTitleStateType = {
    name: {title: {name: ""}}
}

export const getMovieTitleReducer = (
    state = initialStateGetMovieTitle,
    action: MovieTitleAtionTypes
  ): IGetMovieTitleStateType => {
    switch (action.type) {
      case GET_MOVIE_TITLE:
        return {
          ...state,
          name: action.payload
        };
      default:
        return state;
    }
  };
import { getMovieTitleAction } from "redux/actions/home/movietitle/MovieTItleActions"
import { Dispatch } from "redux"
import { MovieTitleAtionTypes } from "redux/types/home/movietitle/MovieTitleTypes"

export const getMovieTitle = () => {

    return function (dispatch: Dispatch<MovieTitleAtionTypes>) {
        const POST_URL = 'https://api.tvmaze.com/shows/1955';
        fetch(POST_URL, {
          method: 'GET'
        })
          .then(res => res.json())
          .then(data => {
            dispatch(getMovieTitleAction(data));
            return data;
          });
      };

}
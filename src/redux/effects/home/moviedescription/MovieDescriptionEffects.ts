import { getMovieDescriptionAction } from "redux/actions/home/moviedescription/MovieDescriptionActions"
import { Dispatch } from "redux"
import { MovieDescriptionAtionTypes } from "redux/types/home/moviedescription/MovieDescriptionTypes"

export const getMovieDescription = () => {

    return function (dispatch: Dispatch<MovieDescriptionAtionTypes>){

        const POST_URL = 'https://api.tvmaze.com/shows/1955';
        fetch(POST_URL, {
          method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            dispatch(getMovieDescriptionAction(data));
            return data;
        });
    };

}
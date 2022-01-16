import { getPosterAction } from "redux/actions/PosterActions";
import { Dispatch } from "redux";
import { PosterActionType } from "redux/types/PosterTypes";

export const getPoster = () => {

    return function (dispatch: Dispatch<PosterActionType>){
       const POSTER_URL = 'https://api.tvmaze.com/shows/1955';
       fetch(POSTER_URL, {
           method: 'GET'
       })
        .then(res => res.json())
        .then(data => {
            dispatch(getPosterAction(data));
            return data;
        });
    }

}
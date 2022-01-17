import { getTvShowPageAction } from "redux/actions/home/TvShowPageActions"
import { Dispatch } from "redux";
import { TvShowPageActionType } from "redux/types/home/TvShowPageTypes";

export const getTvShowPage = () => {

    return function (dispatch: Dispatch<TvShowPageActionType>){
       const POSTER_URL = 'https://api.tvmaze.com/shows/1955';
       fetch(POSTER_URL, {
           method: 'GET'
       })
        .then(res => res.json())
        .then(data => {
            dispatch(getTvShowPageAction(data));
            return data;
        });
    }

}
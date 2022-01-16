import { getMovieEpisodeListAction } from "redux/actions/home/movieepisodelist/MovieEpisodeListActions";
import { Dispatch } from "redux";
import { MovieEpisodeListActionType } from "redux/types/home/movieepisodelist/MovieEpisodeListTypes";

export const getMovieEpisodes = () => {

    return function (dispatch: Dispatch<MovieEpisodeListActionType>){
        const POST_URL = 'https://api.tvmaze.com/shows/1955/episodes';
        fetch(POST_URL, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            dispatch(getMovieEpisodeListAction(data));
            return data;
        });
    };

};
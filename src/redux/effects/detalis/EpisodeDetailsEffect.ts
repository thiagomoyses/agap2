import { Dispatch } from "redux";
import { getEpisodeDetailsAction } from "redux/actions/details/EpisodeDetailsActions"
import { EpisodeDetailsActionType } from "redux/types/details/EpisodeDetailsType";

export function getEpisodeDetails(id: string | undefined){

    return function (dispatch: Dispatch<EpisodeDetailsActionType>){
        const POST_URL = `https://api.tvmaze.com/episodes/${ id }`;

        fetch(POST_URL, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            dispatch(getEpisodeDetailsAction(data));
            return data;
        });
    }
}
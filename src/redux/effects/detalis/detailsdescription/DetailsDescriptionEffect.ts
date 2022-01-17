import { getDetailsDescriptionAction } from "redux/actions/details/detailsdescription/DetailsDescriptionActions"
import { Dispatch } from "redux";
import { DetailsDescriptionActionType } from "redux/types/details/detailsdescription/DetailsDescriptionTypes";

export function getDetailsDescription(id: string | undefined){

    return function (dispatch: Dispatch<DetailsDescriptionActionType>){
        const POST_URL = `https://api.tvmaze.com/episodes/${ id }`;

        fetch(POST_URL, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            dispatch(getDetailsDescriptionAction(data));
            return data;
        });
    }
}
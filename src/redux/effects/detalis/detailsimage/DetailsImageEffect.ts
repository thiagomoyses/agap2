import { getDetailsImageAction } from "redux/actions/details/detailsimage/DetailsImageActions"
import { Dispatch } from "redux";
import { DetailsImageActionType } from "redux/types/details/detailsimage/DetailsImageTypes";

export function getDetailsImage(id: string | undefined){

    return function (dispatch: Dispatch<DetailsImageActionType>){
        const POST_URL = `https://api.tvmaze.com/episodes/${ id }`
        fetch(POST_URL, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            dispatch(getDetailsImageAction(data));
            return data;
        });
    }

}
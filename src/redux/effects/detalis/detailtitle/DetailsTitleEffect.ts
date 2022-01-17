import { getDetailsTitleAction } from "redux/actions/details/detailstitle/DetailsTitleActions"
import { Dispatch } from "redux";
import { DetailsTitleActionType } from "redux/types/details/detailtitle/DetailTitleTypes";

export function getDetailsTitle(id: string | undefined){

    return function (dispatch: Dispatch<DetailsTitleActionType>){
        const POST_URL = `https://api.tvmaze.com/episodes/${ id }`;

        fetch(POST_URL, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            dispatch(getDetailsTitleAction(data));
            return data;
        });
    }
}
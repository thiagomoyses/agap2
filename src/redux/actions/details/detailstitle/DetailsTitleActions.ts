import { GET_DETAILS_TITLE, DetailsTitleActionType } from "redux/types/details/detailtitle/DetailTitleTypes";
import { IDetailsTitle } from "redux/interfaces/details/detailstitle/DetailsTitleInterface";

export const getDetailsTitleAction = (name: IDetailsTitle): DetailsTitleActionType => {
    return{
        type: GET_DETAILS_TITLE,
        payload: name
    }
}
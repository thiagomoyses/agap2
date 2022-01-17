import { IDetailsTitle } from "redux/interfaces/details/detailstitle/DetailsTitleInterface";

export const GET_DETAILS_TITLE = 'GET_DETAILS_TITLE';

export interface IGetDetailsTitleStateType {
    name: IDetailsTitle,
}

interface GetDetailsTitleAction {
    type: typeof GET_DETAILS_TITLE,
    payload: IDetailsTitle
}

export type DetailsTitleActionType = GetDetailsTitleAction
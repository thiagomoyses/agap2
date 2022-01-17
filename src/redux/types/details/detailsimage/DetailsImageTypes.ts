import { IDetailsImage } from "redux/interfaces/details/detailsimage/DetailsImageInterface";

export const GET_DETAILS_IMAGE = 'GET_DETAILS_IMAGE';

export interface IGetDetailsImageStateType{
    image: IDetailsImage
}

interface GetDetailsImageActionType {
    type: typeof GET_DETAILS_IMAGE,
    payload: IDetailsImage
}

export type DetailsImageActionType = GetDetailsImageActionType;
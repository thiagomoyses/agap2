import { IDetailsDescription } from "redux/interfaces/details/detailsdescription/DetailsDescription";

export const GET_DETAILS_DESCRIPTION = 'GET_DETAILS_DESCRIPTION';

export interface IGetDetailsDescriptionType {
    sumary: IDetailsDescription,
}

interface GetDetailsDescriptionAction {
    type: typeof GET_DETAILS_DESCRIPTION,
    payload: IDetailsDescription
}

export type DetailsDescriptionActionType = GetDetailsDescriptionAction
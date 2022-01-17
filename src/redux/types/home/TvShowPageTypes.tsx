import { ITvShowPage } from "redux/interfaces/home/TvShowPageInterface";

export const GET_TV_SHOW_PAGE = 'GET_TV_SHOW_PAGE';

export interface IGetTvShowPageStateType{
    request: ITvShowPage,
}

interface GetTvShowPageActionType{
    type: typeof GET_TV_SHOW_PAGE,
    payload: ITvShowPage
}


export type TvShowPageActionType = GetTvShowPageActionType;
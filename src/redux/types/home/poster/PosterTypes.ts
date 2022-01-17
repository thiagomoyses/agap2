import { IPoster } from "redux/interfaces/home/poster/PosterInterface";

export const GET_POSTER = 'GET_POSTER';

export interface IGetPosterStateType{
    poster: IPoster;
}

interface GetPosterActionType {
    type: typeof GET_POSTER
    payload: IPoster;
  }

export type PosterActionType = GetPosterActionType;
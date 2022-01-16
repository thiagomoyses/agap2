import { IPoster } from "redux/interfaces/PosterInterface";

export const GET_POSTER = 'GET_POSTER';

export interface IGetPosterStateType{
    poster: IPoster;
}

export interface GetPosterActionType {
    type: typeof GET_POSTER
    payload: IPoster;
  }

export type PosterActionType = GetPosterActionType;
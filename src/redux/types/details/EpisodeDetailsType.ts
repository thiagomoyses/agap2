import { IEpisodeDetails } from "redux/interfaces/details/EpisodeDetailsInterface";

export const GET_EPISODE_DETAILS = 'GET_EPISODE_DETAILS';

export interface IGetEpisodeDetailsStateType{
    request: IEpisodeDetails,
}

interface GetTvEpisodeDetailsActionType{
    type: typeof GET_EPISODE_DETAILS,
    payload: IEpisodeDetails
}


export type EpisodeDetailsActionType = GetTvEpisodeDetailsActionType;
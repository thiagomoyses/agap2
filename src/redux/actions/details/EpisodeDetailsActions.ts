import { GET_EPISODE_DETAILS, EpisodeDetailsActionType } from "redux/types/details/EpisodeDetailsType";
import { IEpisodeDetails } from "redux/interfaces/details/EpisodeDetailsInterface";

export const getEpisodeDetailsAction = (request: IEpisodeDetails): EpisodeDetailsActionType => {
    return {
      type: GET_EPISODE_DETAILS,
      payload: request,
    };
  };
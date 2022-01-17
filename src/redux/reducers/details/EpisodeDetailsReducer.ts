import { GET_EPISODE_DETAILS, IGetEpisodeDetailsStateType, EpisodeDetailsActionType } from "redux/types/details/EpisodeDetailsType";

const initialStateGetEpisodeDetails: IGetEpisodeDetailsStateType = {
    request: {
        name: '',
        summary: '',
        image: {
            original: ''
        }
    }
};

export const getEpisodeDetailsReducer = (
    state = initialStateGetEpisodeDetails,
    action: EpisodeDetailsActionType
  ): IGetEpisodeDetailsStateType => {
    switch (action.type) {
      case GET_EPISODE_DETAILS:
        return {
          ...state,
          request: action.payload
        };
      default:
        return state;
    }
  };
  


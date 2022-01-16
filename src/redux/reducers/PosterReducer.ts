import { GET_POSTER, IGetPosterStateType, PosterActionType } from "redux/types/PosterTypes";

const initialStateGetPoster: IGetPosterStateType = {
    poster: {image: {original: ''}}
};

export const getPostersReducer = (
    state = initialStateGetPoster,
    action: PosterActionType
  ): IGetPosterStateType => {
    switch (action.type) {
      case GET_POSTER:
        return {
          ...state,
          poster: action.payload
        };
      default:
        return state;
    }
  };
  


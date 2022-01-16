import { GET_POSTER, PosterActionType } from "redux/types/PosterTypes";
import { IPoster } from "redux/interfaces/PosterInterface";

export const getPosterAction = (poster: IPoster): PosterActionType => {
    return {
      type: GET_POSTER,
      payload: poster
    };
  };
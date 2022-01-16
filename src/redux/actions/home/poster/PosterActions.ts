import { GET_POSTER, PosterActionType } from "redux/types/home/poster/PosterTypes";
import { IPoster } from "redux/interfaces/home/poster/PosterInterface";

export const getPosterAction = (poster: IPoster): PosterActionType => {
    return {
      type: GET_POSTER,
      payload: poster
    };
  };
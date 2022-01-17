import { GET_TV_SHOW_PAGE, TvShowPageActionType } from "redux/types/home/TvShowPageTypes";
import { ITvShowPage } from "redux/interfaces/home/TvShowPageInterface";

export const getTvShowPageAction = (request: ITvShowPage): TvShowPageActionType => {
    return {
      type: GET_TV_SHOW_PAGE,
      payload: request
    };
  };
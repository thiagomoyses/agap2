import { GET_TV_SHOW_PAGE, IGetTvShowPageStateType, TvShowPageActionType } from "redux/types/home/TvShowPageTypes";

const initialStateGetTvShowPage: IGetTvShowPageStateType = {
    request: {
      name: '',
      image: {
        original: ''
      },
      summary: ''
    }
};

export const getTvShowPageReducer = (
    state = initialStateGetTvShowPage,
    action: TvShowPageActionType
  ): IGetTvShowPageStateType => {
    switch (action.type) {
      case GET_TV_SHOW_PAGE:
        return {
          ...state,
          request: action.payload
        };
      default:
        return state;
    }
  };
  


import {
            GET_DETAILS_TITLE,
            IGetDetailsTitleStateType,
            DetailsTitleActionType
} from "redux/types/details/detailtitle/DetailTitleTypes"


const initialStateGetMovieTitle: IGetDetailsTitleStateType = {
    name: {name: ''}
}

export const getDetailsTitleReducer = (
    state = initialStateGetMovieTitle,
    action: DetailsTitleActionType
  ): IGetDetailsTitleStateType => {
    switch (action.type) {
      case GET_DETAILS_TITLE:
        return {
          ...state,
          name: action.payload
        };
      default:
        return state;
    }
  };
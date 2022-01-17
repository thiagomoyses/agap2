import {    GET_DETAILS_IMAGE,
            IGetDetailsImageStateType,
            DetailsImageActionType
} from "redux/types/details/detailsimage/DetailsImageTypes";

const initialStateGetDetailsImage: IGetDetailsImageStateType = {
    image: {image: {original: ''}}
};

export const getDetailsImage = (
    state = initialStateGetDetailsImage,
    action: DetailsImageActionType
  ): IGetDetailsImageStateType => {
    switch (action.type) {
      case GET_DETAILS_IMAGE:
        return {
          ...state,
          image: action.payload
        };
      default:
        return state;
    }
  };
import {
    GET_DETAILS_DESCRIPTION,
    IGetDetailsDescriptionType,
    DetailsDescriptionActionType
} from "redux/types/details/detailsdescription/DetailsDescriptionTypes"


const initialStateGetMovieTitle: IGetDetailsDescriptionType = {
sumary: {summary: ''}
}

export const getDetailsDescriptionReducer = (
state = initialStateGetMovieTitle,
action: DetailsDescriptionActionType
): IGetDetailsDescriptionType => {
switch (action.type) {
case GET_DETAILS_DESCRIPTION:
return {
  ...state,
  sumary: action.payload
};
default:
return state;
}
};
import { GET_DETAILS_IMAGE, DetailsImageActionType } from "redux/types/details/detailsimage/DetailsImageTypes";
import { IDetailsImage } from 'redux/interfaces/details/detailsimage/DetailsImageInterface'

export const getDetailsImageAction = (image: IDetailsImage): DetailsImageActionType => {

    return {
        type: GET_DETAILS_IMAGE,
        payload: image
    };
};
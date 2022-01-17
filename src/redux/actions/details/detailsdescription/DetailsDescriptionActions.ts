import { GET_DETAILS_DESCRIPTION, DetailsDescriptionActionType } from "redux/types/details/detailsdescription/DetailsDescriptionTypes";
import { IDetailsDescription } from "redux/interfaces/details/detailsdescription/DetailsDescription";

export const getDetailsDescriptionAction = (sumary: IDetailsDescription): DetailsDescriptionActionType => {
    return{
        type: GET_DETAILS_DESCRIPTION,
        payload: sumary
    }
}
import {    GET_MOVIE_DESCRIPTION,
            IGetMovieDescriptionStateType,
            MovieDescriptionAtionTypes
} from "redux/types/home/moviedescription/MovieDescriptionTypes";

const initialStateGetMovieDescription: IGetMovieDescriptionStateType = {
    summary: {summary: ''}
}

export const getmovieDescriptionReducer = (
    state = initialStateGetMovieDescription,
    action: MovieDescriptionAtionTypes
) : IGetMovieDescriptionStateType => {

    switch (action.type){
        case GET_MOVIE_DESCRIPTION:
            return{
                ...state,
                summary: action.payload
            }
        default:
            return state;
    }
};
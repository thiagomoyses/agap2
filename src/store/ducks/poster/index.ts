import { Reducer } from 'redux';
import { StatePoster } from './types'
import { PosterTypes } from './types'

const INITIAL_STATE: StatePoster = {

    data: [],
    error: false,
    loading: false,
    //teste: "https://static.tvmaze.com/uploads/images/original_untouched/11/27896.jpg"
    teste: "TESTE STATE INITIAL"
};

const reducer: Reducer<StatePoster> = (state = INITIAL_STATE, action) => {

    switch(action.type){
        case PosterTypes.LOAD_REQUEST:
            return { ...state, loading: true };
        case PosterTypes.LOAD_SUCESS: 
            return { ...state, loading: false, error: false, data: action.payload.data };
        case PosterTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: [] };
        
        default:
            return state;
    }
}

export default reducer;
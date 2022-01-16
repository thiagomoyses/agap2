import { createStore, applyMiddleware  } from "redux";
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index'
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export type AppState = ReturnType<typeof rootReducer>;

export default store;
import { createStore, Store } from "redux";

import rootReducer from "./ducks/rootReducer";
import { StatePoster } from "./ducks/poster/types";

export interface ApplicationState{
    poster: StatePoster,
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
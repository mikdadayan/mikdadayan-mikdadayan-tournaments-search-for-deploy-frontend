import { combineReducers } from "redux";

import tounamentReducer from './tournament/tournament.reducer';

const rootReducer = combineReducers({tournaments: tounamentReducer});

export default rootReducer;

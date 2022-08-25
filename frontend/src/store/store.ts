import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { RootState } from "./types";

import notesReducer from "./reducers/NotesReducer";

const reducer = combineReducers<RootState>({
  notes: notesReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

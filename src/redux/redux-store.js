import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reduce";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reduce";

let reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  sidebar: sidebarReducer,
});

let store = createStore(reducers);

export default store;

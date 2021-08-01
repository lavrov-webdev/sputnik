import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reduce";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reduce";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  sidebar: sidebarReducer,
  users: usersReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;

import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reduce";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reduce";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as form } from "redux-form";

let reducers = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  dialogs: dialogsReducer,
  sidebar: sidebarReducer,
  users: usersReducer,
  form
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;

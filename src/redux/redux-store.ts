import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reduce";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reduce";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";
import { reducer as form } from "redux-form";

let rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  dialogs: dialogsReducer,
  sidebar: sidebarReducer,
  users: usersReducer,
  app: appReducer,
  form,
});

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

// type ActionsType<T> = 

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store;

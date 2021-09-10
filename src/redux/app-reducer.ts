import { AppStateType } from './redux-store';
import { ThunkAction } from "redux-thunk";
import { authUser } from "./auth-reducer";

const SET_INITIALIZED = "/app/SET_INITIALIZED";

const initialState = {
  initialized: false,
};

type InitialStateType = typeof initialState

type ActionsTypes = InituccessActionType

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case SET_INITIALIZED:
      return { ...state, initialized: action.payload.initialized };

    default:
      return state;
  }
};

type InituccessActionType = {
  type: typeof SET_INITIALIZED;
  payload: {
    initialized: boolean;
  };
};

export const inituccess = (): InituccessActionType => ({
  type: SET_INITIALIZED,
  payload: {
    initialized: true,
  },
});

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const initApp = (): ThunkType => async (dispatch: any) => {
  await dispatch(authUser());
  dispatch(inituccess());
};

export default appReducer;

import { InferActionsType } from './../types/index';
import { AppStateType } from './redux-store';
import { ThunkAction } from "redux-thunk";
import { authUser } from "./auth-reducer";

const SET_INITIALIZED = "/app/SET_INITIALIZED";

const initialState = {
  initialized: false,
};

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsType<typeof actions>

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case SET_INITIALIZED:
      return { ...state, initialized: action.payload.initialized };

    default:
      return state;
  }
};

export const actions = {
  inituccess: () => ({
    type: SET_INITIALIZED,
    payload: {
      initialized: true,
    },
  })
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const initApp = (): ThunkType => async (dispatch: any) => {
  await dispatch(authUser());
  dispatch(actions.inituccess());
};

export default appReducer;

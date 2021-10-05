import { InferActionsType, LoginDataType } from "../types/index";
import { AppStateType } from "./redux-store";
import { stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk";
import { securityAPI } from "../api/security-api";
import { authAPI } from "../api/auth-api";
import { ResultCodesEnum } from "../enums/enums";

const SET_USER_DATA = "/auth/SET_USER_DATA";
const TOGGLE_IS_FETCHING = "/auth/TOGGLE_IS_FETCHING";
const SET_TO_INITIAL = "/auth/SET_TO_INITIAL";
const GET_CAPTCHA_SUCCESS = "/auth/GET_CAPTCHA_SUCCESS";

const initialState = {
	id: null as null | number,
	login: null as null | string,
	email: null as null | string,
	isFetching: false,
	isAuth: false,
	capthcaURL: null as null | string, //Null if captcha is not required
};

type InitialStateType = typeof initialState;

type ActionsTypes = InferActionsType<typeof actions>

const authReducer = (
	state = initialState,
	action: ActionsTypes
): InitialStateType => {
	switch (action.type) {
		case SET_USER_DATA:
			return { ...state, ...action.data };
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: !state.isFetching,
			};
		case SET_TO_INITIAL:
			return {
				...initialState,
			};
		case GET_CAPTCHA_SUCCESS:
			return {
				...state,
				capthcaURL: action.url,
			};
		default:
			return state;
	}
};
export const actions = {
	setUserData: (data: any) => {
		return {
			type: SET_USER_DATA,
			data: { ...data },
		} as const;
	},
	toggleIsFetching: () => ({
		type: TOGGLE_IS_FETCHING,
	} as const),
	setToInitialState: () => ({
		type: SET_TO_INITIAL,
	} as const),
	getCaptchaSuccess: (url: string) => ({
		type: GET_CAPTCHA_SUCCESS,
		url,
	} as const),
};

type ThunkType = ThunkAction<
	Promise<void>,
	AppStateType,
	unknown,
	ActionsTypes
>;

export const authUser = (): ThunkType => async (dispatch) => {
	const data = await authAPI.auth();
	dispatch(actions.setUserData({ ...data, isAuth: data.resultCode === 0 }));
};

export const loginUser =
	(loginData: LoginDataType): ThunkType =>
	async (dispatch) => {
		dispatch(actions.toggleIsFetching());
		const response = await authAPI.login({ ...loginData });

		if (response.resultCode === 0) {
			dispatch(authUser());
		} else {
			if (response.resultCode === ResultCodesEnum.CaptchaIsRequired)
				dispatch(getCaptcha());
			const errorMessage = !!response.messages.length
				? response.messages[0]
				: "Some error";
			dispatch(stopSubmit("login", { _error: errorMessage }));
		}
		dispatch(actions.toggleIsFetching());
	};

export const logoutUser = (): ThunkType => async (dispatch) => {
	const response = await authAPI.logout();
	if (response.resultCode === 0) {
		dispatch(actions.setToInitialState());
	}
};

export const getCaptcha = (): ThunkType => async (dispatch) => {
	const responce = await securityAPI.getCaptcha();
	dispatch(actions.getCaptchaSuccess(responce.url));
};

export default authReducer;

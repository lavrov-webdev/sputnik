import { InferActionsType } from './../types/index';
import { AppStateType } from './redux-store';
import { PostType, ProfilePhotosType, ProfileType } from "../types/index";
import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/profile-api";
import { ThunkAction } from 'redux-thunk';

const ADD_POST = "/profile/ADD_POST",
	SET_USER_PROFILE = "/profile/SET_USER_PROFILE;",
	SET_STATUS = "/profile/SET_STATUS",
	UPLOAD_PHOTO_SUCCESS = "/profile/UPLOAD_PHOTO_SUCCESS";

type InitialStateType = {
	posts: Array<PostType>;
	profile: ProfileType | null;
	status: string;
};

let initialState: InitialStateType = {
	posts: [
		{
			id: 1,
			text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
		},
		{
			id: 2,
			text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
		},
		{
			id: 3,
			text: "With supporting text below as a natural lead-in to additional content.",
		},
		{
			id: 4,
			text: "With supporting text below as a natural lead-in to additional content.",
		},
	],
	profile: null,
	status: "",
};

type ActionsTypes = InferActionsType<typeof actions>

const profileReducer = (
	state = initialState,
	action: ActionsTypes
): InitialStateType => {
	switch (action.type) {
		case ADD_POST: {
			return {
				...state,
				posts: [...state.posts, {
					id: 5,
					text: action.postText
				}]
			};
		}
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile,
			};
		case SET_STATUS:
			return {
				...state,
				status: action.status,
			};
		case UPLOAD_PHOTO_SUCCESS:
			return {
				...state,
				profile: { ...state.profile, photos: action.photos },
			};
		default:
			return state;
	}
};

export const actions = {
	addPost: (postText: string) => ({
		type: ADD_POST,
		postText,
	}),
	setUserProfile: (
		profile: ProfileType
	) => ({
		type: SET_USER_PROFILE,
		profile,
	}),
	setStatus: (status: string) => ({
		type: SET_STATUS,
		status,
	}),
	uploadPhotoSuccess: (
		photos: ProfilePhotosType
	) => ({
		type: UPLOAD_PHOTO_SUCCESS,
		photos,
	}),
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getUserData = (id: number): ThunkType => async (dispatch) => {
	const data = await profileAPI.getProfile(id);
	dispatch(actions.setUserProfile(data));
};

export const getUserStatus = (id: number): ThunkType => async (dispatch) => {
	const data = await profileAPI.getStatus(id);
	dispatch(actions.setStatus(data));
};

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
	const { resultCode } = await profileAPI.updateStatus(status);
	if (resultCode === 0) {
		dispatch(actions.setStatus(status));
	}
};

export const uploadProfilePhoto =
	(photo: ProfilePhotosType): ThunkType => async (dispatch) => {
		const responce = await profileAPI.uploadNewPhoto(photo);
		if (responce.resultCode === 0)
			dispatch(actions.uploadPhotoSuccess(responce.data.photos));
	};

export const updateProfileData =
	(profile: ProfileType) => async (dispatch: any) => {
		const responce = await profileAPI.uploadNewProfileData(profile);
		if (responce.resultCode === 0) {
			dispatch(actions.setUserProfile(profile));
			return true;
		} else {
			let errors = responce.messages;
			const contactErrors: any = {};
			errors.forEach((errorMessage: any) => {
				if (errorMessage.includes("Invalid url forma")) {
					const errorField = errorMessage
						.split("->")[1]
						.slice(0, -1)
						.toLowerCase();
					contactErrors[errorField] = "empty";
				}
			});
			dispatch(stopSubmit("profileData", { contacts: contactErrors }));
			return false;
		}
	};

export default profileReducer;

import { AppStateType } from './redux-store';
import { PostType, ProfilePhotosType, ProfileType } from "../types/index";
import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";
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

type ActionsTypes =
	| AddPostTypeAction
	| SetUserProfileTypeAction
	| SetStatusTypeAction
	| UploadPhotoSuccessTypeAction;

const profileReducer = (
	state = initialState,
	action: ActionsTypes
): InitialStateType => {
	switch (action.type) {
		case ADD_POST: {
			let tempState = { ...state };
			tempState.posts = [...state.posts];
			tempState.posts.push({
				id: 5,
				text: action.postText,
			});
			return tempState;
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
				profile: { ...state.profile, photos: action.photos } as ProfileType,
			};
		default:
			return state;
	}
};

type AddPostTypeAction = {
	type: typeof ADD_POST;
	postText: string;
};
export const addPost = (postText: string): AddPostTypeAction => ({
	type: ADD_POST,
	postText,
});

type SetUserProfileTypeAction = {
	type: typeof SET_USER_PROFILE;
	profile: ProfileType;
};
export const setUserProfile = (
	profile: ProfileType
): SetUserProfileTypeAction => ({
	type: SET_USER_PROFILE,
	profile,
});

type SetStatusTypeAction = {
	type: typeof SET_STATUS;
	status: string;
};
export const setStatus = (status: string): SetStatusTypeAction => ({
	type: SET_STATUS,
	status,
});

type UploadPhotoSuccessTypeAction = {
	type: typeof UPLOAD_PHOTO_SUCCESS;
	photos: ProfilePhotosType;
};
const uploadPhotoSuccess = (
	photos: ProfilePhotosType
): UploadPhotoSuccessTypeAction => ({
	type: UPLOAD_PHOTO_SUCCESS,
	photos,
});

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getUserData = (id: number): ThunkType => async (dispatch) => {
	const data = await profileAPI.getProfile(id);
	dispatch(setUserProfile(data));
};

export const getUserStatus = (id: number): ThunkType => async (dispatch) => {
	const data = await profileAPI.getStatus(id);
	dispatch(setStatus(data));
};

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
	const { resultCode } = await profileAPI.updateStatus(status);
	if (resultCode === 0) {
		dispatch(setStatus(status));
	}
};

export const uploadProfilePhoto =
	(photo: ProfilePhotosType): ThunkType => async (dispatch) => {
		const responce = await profileAPI.uploadNewPhoto(photo);
		if (responce.resultCode === 0)
			dispatch(uploadPhotoSuccess(responce.data.photos));
	};

export const updateProfileData =
	(profile: ProfileType) => async (dispatch: any) => {
		const responce = await profileAPI.uploadNewProfileData(profile);
		if (responce.resultCode === 0) {
			dispatch(setUserProfile(profile));
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

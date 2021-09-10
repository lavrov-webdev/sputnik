import { UserType } from "../types/index";
import { usersAPI, followAPI } from "../api/api";
import { updateObjectArray } from "../utils/object-heplers";
import { Action, Dispatch } from "redux";
import { AppStateType } from "./redux-store";
import { ThunkAction } from "redux-thunk";

const UNFOLLOW = "/users/UNFOLLOW",
	FOLLOW = "/users/FOLLOW",
	SET_USERS = "/users/SET_USERS",
	SET_CURRENT_PAGE = "/users/SET_CURRENT_PAGE",
	SET_TOTAL_USERS_COUNT = "S/users/ET_TOTAL_USERS_COUNT",
	TOGGLE_ISFETCHING = "/users/TOGGLE_ISFETCHING",
	TOGGLE_FOLLOWING_IN_PROGRESS = "/users/TOGGLE_FOLLOWING_IN_PROGRESS";

const initialState = {
	users: [] as Array<UserType>,
	pageSize: 100,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
};

type InitialStateType = typeof initialState;

type ActionsTypes =
	| AcceptFollowTypeAction
	| AcceptUnfollowTypeAction
	| SetUsersTypeAction
	| SetPageTypeAction
	| SetTotalUsersCountTypeAction
	| ToggleIsFetchingTypeAction
	| ToggleFollowingInProgressTypeAction;

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: updateObjectArray(state.users, "id", action.userId, {
					followed: true,
				}),
			};
		case UNFOLLOW:
			return {
				...state,
				users: updateObjectArray(state.users, "id", action.userId, {
					followed: false,
				}),
			};
		case SET_USERS:
			return {
				...state,
				users: [...action.users],
			};
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.page,
			};
		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.totalCount,
			};
		case TOGGLE_ISFETCHING:
			return {
				...state,
				isFetching: action.value,
			};
		case TOGGLE_FOLLOWING_IN_PROGRESS:
			const tempusers = state.users.map((u) =>
				u.id !== action.id ? u : { ...u, followingInProgress: action.value }
			);
			return {
				...state,
				users: tempusers,
			};
		default:
			return state;
	}
};

type AcceptFollowTypeAction = {
	type: typeof FOLLOW;
	userId: number;
};
export const acceptFollow = (userId: number): AcceptFollowTypeAction => ({
	type: FOLLOW,
	userId,
});

type AcceptUnfollowTypeAction = {
	type: typeof UNFOLLOW;
	userId: number;
};
export const acceptUnfollow = (userId: number): AcceptUnfollowTypeAction => ({
	type: UNFOLLOW,
	userId,
});

type SetUsersTypeAction = {
	type: typeof SET_USERS;
	users: Array<UserType>;
};
export const setUsers = (users: Array<UserType>): SetUsersTypeAction => ({
	type: SET_USERS,
	users,
});

type SetPageTypeAction = {
	type: typeof SET_CURRENT_PAGE;
	page: number;
};
export const setPage = (page: number): SetPageTypeAction => ({
	type: SET_CURRENT_PAGE,
	page,
});

type SetTotalUsersCountTypeAction = {
	type: typeof SET_TOTAL_USERS_COUNT;
	totalCount: number;
};
export const setTotalUsersCount = (
	totalCount: number
): SetTotalUsersCountTypeAction => ({
	type: SET_TOTAL_USERS_COUNT,
	totalCount,
});

type ToggleIsFetchingTypeAction = {
	type: typeof TOGGLE_ISFETCHING;
	value: boolean;
};
export const toggleIsFetching = (
	value: boolean
): ToggleIsFetchingTypeAction => ({ type: TOGGLE_ISFETCHING, value });

type ToggleFollowingInProgressTypeAction = {
	type: typeof TOGGLE_FOLLOWING_IN_PROGRESS;
	id: number;
	value: boolean;
};
export const toggleFollowingInProgress = (
	id: number,
	value: boolean
): ToggleFollowingInProgressTypeAction => ({
	type: TOGGLE_FOLLOWING_IN_PROGRESS,
	id,
	value,
});

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getUsers =
	(currentPage: number, pageSize: number): ThunkType => async (dispatch) => {
		dispatch(toggleIsFetching(true));
		const data = await usersAPI.getusers(currentPage, pageSize);
		dispatch(setUsers(data.items));
		dispatch(setTotalUsersCount(data.totalCount));
		dispatch(toggleIsFetching(false));
	};

const _followUnfollowFlow = async (
	dispatch: Dispatch<ActionsTypes>,
	id: number,
	apiMethod: any,
	action: (userId: number) => AcceptFollowTypeAction | AcceptUnfollowTypeAction
) => {
	dispatch(toggleFollowingInProgress(id, true));

	const resultCode = await apiMethod(id);
	if (resultCode === 0) {
		dispatch(action(id));
	}

	dispatch(toggleFollowingInProgress(id, false));
};

export const unfollow = (id: number): ThunkType => async (dispatch) => {
	_followUnfollowFlow(
		dispatch,
		id,
		followAPI.unfollow.bind(followAPI),
		acceptUnfollow
	);
};

export const follow = (id: number): ThunkType => async (dispatch) => {
	_followUnfollowFlow(
		dispatch,
		id,
		followAPI.follow.bind(followAPI),
		acceptFollow
	);
};

export default usersReducer;

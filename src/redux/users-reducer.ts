import { InferActionsType } from './../types/index';
import { UserType } from "../types/index";
import { followAPI } from "../api/follow-api";
import { usersAPI } from "../api/users-api";
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

type ActionsTypes = InferActionsType<typeof actions>

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

export const actions = {
	acceptFollow: (userId: number) => ({
		type: FOLLOW,
		userId,
	} as const),
	acceptUnfollow: (userId: number) => ({
		type: UNFOLLOW,
		userId,
	} as const),
	setUsers: (users: Array<UserType>) => ({
		type: SET_USERS,
		users,
	} as const),
	setPage: (page: number) => ({
		type: SET_CURRENT_PAGE,
		page,
	} as const),
	setTotalUsersCount: (
		totalCount: number
	) => ({
		type: SET_TOTAL_USERS_COUNT,
		totalCount,
	} as const),
	toggleIsFetching: (
		value: boolean
	) => ({ type: TOGGLE_ISFETCHING, value } as const),
	toggleFollowingInProgress: (
		id: number,
		value: boolean
	) => ({
		type: TOGGLE_FOLLOWING_IN_PROGRESS,
		id,
		value,
	} as const),
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getUsers =
	(currentPage: number, pageSize: number): ThunkType => async (dispatch) => {
		dispatch(actions.toggleIsFetching(true));
		const data = await usersAPI.getusers(currentPage, pageSize);
		dispatch(actions.setUsers(data.items));
		dispatch(actions.setTotalUsersCount(data.totalCount));
		dispatch(actions.toggleIsFetching(false));
	};

const _followUnfollowFlow = async (
	dispatch: Dispatch<ActionsTypes>,
	id: number,
	apiMethod: any,
	action: (userId: number) => ActionsTypes
) => {
	dispatch(actions.toggleFollowingInProgress(id, true));

	const resultCode = await apiMethod(id);
	if (resultCode === 0) {
		dispatch(action(id));
	}

	dispatch(actions.toggleFollowingInProgress(id, false));
};

export const unfollow = (id: number): ThunkType => async (dispatch) => {
	_followUnfollowFlow(
		dispatch,
		id,
		followAPI.unfollow.bind(followAPI),
		actions.acceptUnfollow
	);
};

export const follow = (id: number): ThunkType => async (dispatch) => {
	_followUnfollowFlow(
		dispatch,
		id,
		followAPI.follow.bind(followAPI),
		actions.acceptFollow
	);
};

export default usersReducer;

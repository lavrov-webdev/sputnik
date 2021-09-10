import { AppStateType } from './../redux-store';
export const getUsersSelector = (state: AppStateType) => state.users.users;

export const getPageSize = (state: AppStateType) => state.users.pageSize;

export const getTotalUsersCount = (state: AppStateType) => state.users.totalUsersCount;

export const getCurrentPAge = (state: AppStateType) => state.users.currentPage;

export const getIsFetching = (state: AppStateType) => state.users.isFetching;

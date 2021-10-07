import { UserType } from './../types/index';
import { instance, GetItemType } from './api';

export const usersAPI = {
  async getusers(currentPage: number, pageSize = 10) {
    const { data } = await instance.get<GetItemType<UserType>>(
      `/users?page=${currentPage}&count=${pageSize}`,
      {}
    );
    return data;
  },
};

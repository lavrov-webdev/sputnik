import { instance } from './api';


export const usersAPI = {
  async getusers(currentPage: number, pageSize = 10) {
    const { data } = await instance.get(
      `/users?page=${currentPage}&count=${pageSize}`,
      {}
    );
    return data;
  },
};

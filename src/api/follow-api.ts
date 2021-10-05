import { instance } from './api';


export const followAPI = {
  async follow(id: number) {
    const { data } = await instance.post(`/follow/${id}`);
    return data.resultCode;
  },
  async unfollow(id: number) {
    const { data } = await instance.delete(`/follow/${id}`);
    return data.resultCode;
  },
};

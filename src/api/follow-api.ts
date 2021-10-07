import { instance, ResponceType } from './api';


export const followAPI = {
  async follow(id: number) {
    const { data } = await instance.post<ResponceType>(`/follow/${id}`);
    return data.resultCode;
  },
  async unfollow(id: number) {
    const { data } = await instance.delete<ResponceType>(`/follow/${id}`);
    return data.resultCode;
  },
};

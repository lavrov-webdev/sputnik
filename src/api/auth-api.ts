import { LoginDataType } from '../types/index';
import { instance, ResponceType } from './api';

type AuthResponceDataType = {
  id: number
  email: string
  login: string
}

type LoginResponceDataType = {
  userId: number
}

export const authAPI = {
  async auth() {
    const { data } = await instance.get<ResponceType<AuthResponceDataType>>(`/auth/me`);
    return { ...data.data, resultCode: data.resultCode };
  },
  async login(loginData: LoginDataType) {
    const { data } = await instance.post<ResponceType<LoginResponceDataType>>(`/auth/login`, {
      ...loginData
    });
    return { ...data };
  },
  async logout() {
    const { data } = await instance.delete<ResponceType>("/auth/login");
    return { ...data };
  },
};

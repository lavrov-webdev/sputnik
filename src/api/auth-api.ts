import { LoginDataType } from '../types/index';
import { instance } from './api';
import { ResultCodesEnum } from '../enums/enums';

type AuthResponceType = {
  data: {id: number, email: string, login: string},
  resultCode: ResultCodesEnum,
  messages: Array<string>
}
type LoginResponceType = {
  resultCode: ResultCodesEnum,
  messages: Array<string>,
  data: {userId: number}
}
type LogoutResponceType = {
  resultCode: ResultCodesEnum,
  messages: Array<string>,
  data: object
}

export const authAPI = {
  async auth() {
    const { data } = await instance.get<AuthResponceType>(`/auth/me`);
    return { ...data.data, resultCode: data.resultCode };
  },
  async login(loginData: LoginDataType) {
    const { data } = await instance.post<LoginResponceType>(`/auth/login`, {
      ...loginData
    });
    return { ...data };
  },
  async logout() {
    const { data } = await instance.delete<LogoutResponceType>("/auth/login");
    return { ...data };
  },
};

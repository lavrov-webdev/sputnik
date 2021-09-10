import { ProfileType, LoginDataType, ProfilePhotosType } from '../types/index';
import axios from "axios";
import { ResultCodesEnum } from '../enums/enums';

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  headers: {
    "API-KEY": "d4692b01-df85-4412-a1db-c40603b52ec9",
  },
});

export const usersAPI = {
  async getusers(currentPage:number, pageSize = 10) {
    const { data } = await instance.get(
      `/users?page=${currentPage}&count=${pageSize}`,
      {}
    );
    return data;
  },
};

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

type UpdateStatusResponceType = {
  resultCode: ResultCodesEnum,
  messages: Array<string>,
  data: object
}
type UploadNewPhotoReponceType = {
  data: {
    photos: ProfilePhotosType,
  },
  resultCode: ResultCodesEnum,
  messages: Array<string>
}
type UploadNewProfileDataResponceType = {
  resultCode: ResultCodesEnum,
  messages: Array<string>,
  data: object
}
export const profileAPI = {
  async getProfile(id: number) {
    const { data } = await instance.get<ProfileType>(`/profile/${id}`);
    return { ...data };
  },
  async getStatus(id: number) {
    const { data } = await instance.get<string>(`/profile/status/${id}`);
    return data;
  },
  async updateStatus(status: string) {
    const { data } = await instance.put<UpdateStatusResponceType>(`/profile/status/`, { status });
    return { ...data };
  },
  async uploadNewPhoto(photoFile: any) {
    const formData = new FormData();
    formData.append("image", photoFile);
    const { data } = await instance.put<UploadNewPhotoReponceType>("/profile/photo", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return {...data}
  },
  async uploadNewProfileData(profile: ProfileType) {
    const {data} = await instance.put<UploadNewProfileDataResponceType>('/profile', {...profile});
    return data
  }
};

export const securityAPI = {
  async getCaptcha() {
    const { data } = await instance.get<{url: string}>(`/security/get-captcha-url`);
    return data;
  },
};
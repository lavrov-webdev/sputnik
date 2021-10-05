import { ResultCodesEnum } from './../enums/enums';
import { ProfilePhotosType, ProfileType } from '../types/index';
import { instance } from './api';

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
    return { ...data };
  },
  async uploadNewProfileData(profile: ProfileType) {
    const { data } = await instance.put<UploadNewProfileDataResponceType>('/profile', { ...profile });
    return data;
  }
};

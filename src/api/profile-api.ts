import { ProfilePhotosType, ProfileType } from '../types/index';
import { instance, ResponceType } from './api';

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
    const { data } = await instance.put<ResponceType>(`/profile/status/`, { status });
    return { ...data };
  },
  async uploadNewPhoto(photoFile: any) {
    const formData = new FormData();
    formData.append("image", photoFile);
    const { data } = await instance.put<ResponceType<{photos: ProfilePhotosType}>>("/profile/photo", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return { ...data };
  },
  async uploadNewProfileData(profile: ProfileType) {
    const { data } = await instance.put<ResponceType>('/profile', { ...profile });
    return data;
  }
};

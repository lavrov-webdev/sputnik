import { instance } from './api';


export const securityAPI = {
  async getCaptcha() {
    const { data } = await instance.get<{ url: string; }>(`/security/get-captcha-url`);
    return data;
  },
};

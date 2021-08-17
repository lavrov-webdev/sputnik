import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  headers: {
    "API-KEY": "d4692b01-df85-4412-a1db-c40603b52ec9",
  },
});

export const usersAPI = {
  getusers(currentPage, pageSize = 10) {
    return instance
      .get(`/users?page=${currentPage}&count=${pageSize}`, {})
      .then((response) => response.data);
  },
};

export const followAPI = {
  follow(id) {
    return instance
      .post(`/follow/${id}`)
      .then((response) => response.data.resultCode);
  },
  unfollow(id) {
    return instance
      .delete(`/follow/${id}`)
      .then((response) => response.data.resultCode);
  },
};

export const authAPI = {
  auth() {
    return instance.get(`/auth/me`).then((response) => {
      return { ...response.data.data, resultCode: response.data.resultCode };
    });
  },
};

export const profileAPI = {
  getProfile(id) {
    return instance
      .get(`/profile/${id}`)
      .then((response) => ({ ...response.data }));
  },
};

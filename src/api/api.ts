import { ResultCodesEnum } from './../enums/enums';
import axios from "axios";

export const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  headers: {
    "API-KEY": "d4692b01-df85-4412-a1db-c40603b52ec9",
  },
});

export type GetItemType<T> = {
  items: Array<T>
  totalCount: number
  error: null | string
}

export type ResponceType<D = {}, RC = ResultCodesEnum> = {
  data: D
  messages: Array<string>
  resultCode: RC
}
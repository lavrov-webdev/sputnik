type PropertiesType<T> = T extends {[key: string]:infer U } ? U : never
export type InferActionsType<T extends {[key: string]: (...args:any) => any}> = ReturnType<PropertiesType<T>>

export type ProfilePhotosType = {
  small: string | null;
  large: string | null;
};

export type ProfileContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

export type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ProfileContactsType;
  photos: ProfilePhotosType;
};

export type UserType = {
  id: number,
  name: string,
  status: string,
  photos: ProfilePhotosType,
  followed: boolean
  followingInProgress?: boolean
}

export type LoginDataType = {
  email: string,
  password: string,
  rememberMe?: boolean,
  captcha?: string
}

export type PostType = {
  id: number,
  text: string
}
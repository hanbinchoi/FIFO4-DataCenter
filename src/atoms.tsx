import { atom } from "recoil";

export interface IUser {
  accessId: string;
  nickname: string;
  level: number;
  rank: number | undefined;
}

export const userState = atom<IUser>({
  key: "nickname",
  default: {
    accessId: "",
    nickname: "",
    level: 0,
    rank: undefined,
  },
});

export interface IDivision {
  divisionId: number;
  divisionName: string;
}

export const divisionState = atom<IDivision[]>({
  key: "division",
  default: [],
});

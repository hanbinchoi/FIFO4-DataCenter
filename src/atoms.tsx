import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const nicknameState = atom({
  key: "nickname",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

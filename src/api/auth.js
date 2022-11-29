import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
import { post, get } from ".";

const { persistAtom } = recoilPersist();

export const userDataState = atom({
  key: "userDataState",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const useAuthActions = () => {
  const [userData, setUserData] = useRecoilState(userDataState);

  return { login, register };

  /**
   * @param { {username : string, password : string} }
   */
  async function login(req) {
    const loginRes = await post(`auth/signin`, req);
    if (loginRes.status === 201) {
      localStorage.setItem("authToken", loginRes.data.accessToken);
      const userDataRes = await post(`auth/user`, req);
      setUserData(userDataRes.data);
    }
  }

  /**
   * @param { {username : string, password : string, nickname : string, introduce : string, area : string, category : string} }
   */
  async function register(req) {
    const res = await post(`auth/signup`, req);
    return res;
  }
};

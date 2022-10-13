import { atom, useRecoilState } from "recoil";
import { post } from ".";

export const authTokenState = atom({
  key: "authToken",
  default: { username: "", authToken: "" },
});

export const useAuthActions = () => {
  const [authToken, setAuthToken] = useRecoilState(authTokenState);

  return { login, register };

  /**
   * @param { {username : string, password : string} }
   */
  async function login(req) {
    const res = await post(`auth/signin`, req);
    if (res.status === 200) {
      localStorage.setItem("studyCapstone", res.data.accessToken);
      localStorage.setItem("studyCapstoneId", res.data.username);
      setAuthToken({
        ...authToken,
        username: localStorage.getItem("studyCapstone"),
        authToken: localStorage.getItem("studyCapstone"),
      });
    }

    return res;
  }

  /**
   * @param { {username : string, password : string, nickname : string, introduce : string, area : string, category : string} }
   */
  async function register(req) {
    const res = await post(`auth/signup`, req);
    return res;
    // if (res.status === 201) {
    //   localStorage.setItem("studyCapstoneId", req.username);
    // }
  }
};

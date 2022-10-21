import { get, patch, post, del } from ".";

export const useStudyActions = () => {
  return {
    createStudy,
    updateStudy,
    getStudyList,
    getStudyDetail,
    deleteStudy,
    joinStudy,
  };

  async function createStudy(req) {
    const res = await post(`Studys`, req);
    return res;
  }

  async function updateStudy(req) {
    const res = await patch(`Studys`, req);
    return res;
  }

  async function getStudyList(req) {
    const res = await get("Studys", req);
    return res;
  }

  async function getStudyDetail(req) {
    const res = await get(`Studys/${req}`, req);
    return res;
  }

  async function deleteStudy(req) {
    const res = await del(`/Studys/${req}`, req);
    return res;
  }

  async function joinStudy(req, obj) {
    const res = await patch(`/Studys/${req}/users`, obj);
    return res;
  }
  //   /**
  //    * @param { {username : string, password : string} }
  //    */
  //   async function login(req) {
  //     const res = await post(`auth/signin`, req);
  //     localStorage.setItem("studyCapstone", res.data.accessToken);
  //     return res;
  //   }

  //   /**
  //    * @param { {username : string, password : string, nickname : string, introduce : string, area : string, category : string} }
  //    */
  //   async function register(req) {
  //     const res = await post(`auth/signup`, req);
  //   }
};

import { get, post } from ".";

export const useQnaActions = () => {
  return {
    createQna,
    getQnaData,
  };

  async function createQna(req) {
    const res = await post(`qna`, req);
    return res;
  }
  async function getQnaData(req) {
    const res = await get(`qna/${req}`, req);
    return res;
  }
};

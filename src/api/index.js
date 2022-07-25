import axios from "axios";

export const get = async (url, data) => {
  const res = await axios
    .get(`${url}`, { params: data })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
  return res;
};

export const post = async (url, data) => {
  const res = await axios
    .post(`${url}`, data)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
  return res;
};

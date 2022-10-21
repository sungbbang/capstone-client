import axios from "axios";

export const get = async (url, data) => {
  const res = await axios
    .get(`${url}`, {
      // params: data,
      headers: {
        Authorization: `bearer ${localStorage.getItem("authToken")}`,
      },
    })
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
    .post(`${url}`, data, {
      headers: {
        Authorization: `bearer ${localStorage.getItem("authToken")}`,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
  return res;
};

export const patch = async (url, data) => {
  const res = await axios
    .patch(`${url}`, data, {
      headers: {
        Authorization: `bearer ${localStorage.getItem("authToken")}`,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
  return res;
};

export const del = async (url, data) => {
  const res = await axios
    .delete(`${url}`, {
      // params: data,
      headers: {
        Authorization: `bearer ${localStorage.getItem("authToken")}`,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
  return res;
};

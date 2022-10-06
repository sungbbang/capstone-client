import axios from "axios";

export const get = async (url, data) => {
  const res = await axios
    .get(`${url}`, {
      params: data,
      headers: {
        Authorization: `bearer ${localStorage.getItem("studyCapstone")}`,
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
        Authorization: `bearer ${localStorage.getItem("studyCapstone")}`,
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
        Authorization: `bearer ${localStorage.getItem("studyCapstone")}`,
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
      params: data,
      headers: {
        Authorization: `bearer ${localStorage.getItem("studyCapstone")}`,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
  return res;
  // axios
  //     .delete(`/study/${params.id}`)
  //     .then(() => {
  //       alert("삭제되었습니다.");
  //       navigate("/study_list");
  //     })
  //     .catch(() => console.log("error"));
};

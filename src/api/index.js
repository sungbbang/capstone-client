import axios from "axios";

export const get = async () => {
  const res = await axios
    .get("/study")
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
  return res;
};

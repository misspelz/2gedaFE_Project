import axios from "axios";
import { url } from "./index";

const token = localStorage.getItem("authTOken");

export const UserInfoApi = () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${url}/userinfo/`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    },
    redirect: "follow",
  };

  return axios
    .request(config)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      if (error.response.data.detail) {
        throw new Error(error.response.data.detail);
      }
    });
};

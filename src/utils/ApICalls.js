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

export const CreatePollApi = (formData) => {
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${url}/poll/polls`,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Token ${token}`,
    },
    redirect: "follow",
    body: formData,
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

export const MyPollsApi = () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${url}/poll/polls`,
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

export const SuggestedPollsApi = () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${url}/poll/suggested-polls/`,
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
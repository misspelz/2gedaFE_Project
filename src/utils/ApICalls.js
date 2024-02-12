import axios, { AxiosError } from "axios";
import { url } from "./index";

export const signToken = localStorage.getItem("authTOken");
console.log("signToken", signToken);

export const Login = async (payload) => {
  const res = await axios.post(`${url}/login/`, { ...payload });
  return res;
  // let userData = JSON.stringify(payload);
  // console.log("login_api", userData);
  // let config = {
  //   method: "POST",
  //   maxBodyLength: Infinity,
  //   url: `${url}/login/`,
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   redirect: "follow",
  //   body: userData,
  // };

  // return axios
  //   .request(config)
  //   .then((response) => {
  //     return response;
  //   })
  //   .catch((error) => {
  //     console.log("error", error);
  //     if (error.response.data.error) {
  //       throw new Error(error.response.data.error);
  //     }
  //   });
};

export const UserInfoApi = async (userToken) => {
  const res = await axios.get(`${url}/userinfo/`, {
    headers: {
      Authorization: `Token ${userToken}`,
    },
  });
  return res;
};

export const GetOTP = async (emailData) => {
  console.log("emailData", emailData);

  const res = await axios.post(`${url}/get-otp/`, { ...emailData });
  return res;
};

export const VerifyOTP = async (otp) => {
  console.log("otp", otp);

  const res = await axios.post(
    `${url}/verify-otp/`,
    { ...otp },
    {
      headers: {
        Authorization: `Token ${signToken}`,
      },
    }
  );
  return res;
};

export const CreatePollApi = async (formData) => {
  const res = await axios.post(
    `${url}/poll/polls`,
    { ...formData },
    {
      headers: {
        Authorization: `Token ${signToken}`,
      },
    }
  );
  return res;
};

export const CastVoteApi = async (payload) => {
  const res = await axios.post(
    `${url}/poll/votes`,
    { ...payload },
    {
      headers: {
        Authorization: `Token ${signToken}`,
      },
    }
  );
  return res;
};

export const MyPollsApi = async () => {
  const res = await axios.get(`${url}/poll/polls`, {
    headers: {
      Authorization: `Token ${signToken}`,
    },
  });
  return res;
  // let config = {
  //   method: "get",
  //   maxBodyLength: Infinity,
  //   url: `${url}/poll/polls`,
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Token ${signToken}`,
  //   },
  //   redirect: "follow",
  // };

  // return axios
  //   .request(config)
  //   .then((response) => {
  //     return response;
  //   })
  //   .catch((error) => {
  //     console.log("error", error);
  //     if (error.response.data.error) {
  //       throw new Error(error.response.data.error);
  //     }
  //   });
};

export const SuggestedPollsApi = async () => {
  const res = await axios.get(`${url}/poll/suggested-polls/`, {
    headers: {
      Authorization: `Token ${signToken}`,
    },
  });
  return res;
  // let config = {
  //   method: "get",
  //   maxBodyLength: Infinity,
  //   url: `${url}/poll/suggested-polls/`,
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Token ${signToken}`,
  //   },
  //   redirect: "follow",
  // };

  // return axios
  //   .request(config)
  //   .then((response) => {
  //     return response;
  //   })
  //   .catch((error) => {
  //     console.log("error", error);
  //     if (error.response.data.error) {
  //       throw new Error(error.response.data.error);
  //     }
  //   });
};

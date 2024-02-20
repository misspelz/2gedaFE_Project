import axios from 'axios';
import { url } from './index';

let token = null;

export const setToken = (newToken) => {
  token = newToken;
};

export const getToken = () => {
  if (!token) {
    token = localStorage.getItem('authTOken');
    console.log('regtoken', token);
  }
  return token;
};

export const Login = async (payload) => {
  const res = await axios.post(`${url}/login/`, { ...payload });
  return res;
};

export const UserInfoApi = async (userToken) => {
  const res = await axios.get(`${url}/userinfo/`, {
    headers: {
      Authorization: `Token ${userToken || getToken()}`,
    },
  });
  return res;
};

export const GetOTP = async (emailData) => {
  console.log('emailData', emailData);

  const res = await axios.post(`${url}/get-otp/`, { ...emailData });
  return res;
};

export const VerifyOTP = async (otp) => {
  console.log('otp', otp);

  const res = await axios.post(
    `${url}/verify-otp/`,
    { ...otp },
    {
      headers: {
        Authorization: `Token ${getToken()}`,
      },
    }
  );
  return res;
};

export const VerifyEmail = async (emailToken) => {
  const res = await axios.post(
    `${url}/verify-email/`,
    { token: emailToken },
    {
      headers: {
        Authorization: `Token ${getToken()}`,
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
        Authorization: `Token ${getToken()}`,
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
        Authorization: `Token ${getToken()}`,
      },
    }
  );
  return res;
};

export const MyPollsApi = async () => {
  const res = await axios.get(`${url}/poll/polls`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  });
  return res;
};

export const SuggestedPollsApi = async () => {
  const res = await axios.get(`${url}/poll/suggested-polls/`, {
    headers: {
      Authorization: `Token ${getToken()}`,
    },
  });
  return res;
};

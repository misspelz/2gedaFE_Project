import { getTokenFromLocalStorage } from 'utils/token';

// MAIN URL
const mainURL = 'https://development.2geda.net';

// getting current logged user token
const token = getTokenFromLocalStorage();

// appending token to authorization header
const myHeaders = new Headers();
myHeaders.append('Authorization', `Token ${token}`);

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

// get current logged in user profile
export const getProfileData = async () => {
  try {
    const response = await fetch(`${mainURL}/userinfo/`, requestOptions);

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

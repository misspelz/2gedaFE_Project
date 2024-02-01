export const isAuthenticated = () => {
  const userInfoString = localStorage.getItem("2gedaUserInfo");

  const userInfo = JSON.parse(userInfoString);

  // Check if userInfo is not null or undefined
  if (!userInfo) {
    return false;
  }

  // Check if the user is verified
  // return userInfo.is_verified === true;
  return userInfo;
};


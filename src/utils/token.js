export const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem('authToken');

  if (!token) {
    // return (window.location.href = 'http://localhost:3000/Signin');
    return ""
  }

  return token;
};

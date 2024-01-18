import { useState } from 'react';

export default function useToken () {
  function getToken () {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.data.accessToken;
  }

  const [accessToken, setAccessToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setAccessToken(userToken.data.accessToken);
  };

  return {
    setAccessToken: saveToken,
    accessToken
  };
}

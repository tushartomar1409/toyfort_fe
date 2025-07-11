
export const BASE_URLS = {
  AUTH: 'http://localhost:8000/users',
};


export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${BASE_URLS.AUTH}/login`,
    REGISTER: `${BASE_URLS.AUTH}/register`,
    LOGOUT: `${BASE_URLS.AUTH}/logout`,
    PROFILE: `${BASE_URLS.AUTH}/profile`,
  },
  
};
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://discord.com/api'
});

export { api }

// const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

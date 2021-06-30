const DATABASE_NAME = '@gameplay';

const COLLECTION_USERS = `${DATABASE_NAME}:user`;
const COLLECTION_APPOINTMENTS = `${DATABASE_NAME}:appointments`;

export {
  COLLECTION_USERS,
  COLLECTION_APPOINTMENTS
}

// structure:
// const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

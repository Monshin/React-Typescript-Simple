type EnvStringType = 'debug' | 'alpha' | 'production';
type EnvDicObjectType = { [propName in EnvStringType]: string };

const getConfig = () => {
  const envVars = {
    REACT_EVN: process.env.REACT_APP_ENV ? (process.env.REACT_APP_ENV as EnvStringType) : 'debug'
  };

  if (!['debug', 'alpha', 'production'].includes(envVars.REACT_EVN)) {
    throw new Error(`Config validation error`);
  }

  const PROJECT_NAME = 'react-typescript-simple';

  if (localStorage.debug) {
    localStorage.removeItem('debug');
  }
  if (envVars.REACT_EVN === 'debug') {
    localStorage.debug = `${PROJECT_NAME}:*`;
  }

  const API_URL: EnvDicObjectType = {
    debug: 'https://jsonplaceholder.typicode.com',
    alpha: 'https://jsonplaceholder.typicode.com',
    production: 'https://jsonplaceholder.typicode.com'
  };

  return {
    PROJECT_NAME,
    VERSION: '0.1.2',
    REACT_EVN: envVars.REACT_EVN,
    API_URL: API_URL[envVars.REACT_EVN]
  };
};

export default getConfig();

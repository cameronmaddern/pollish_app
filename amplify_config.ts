import {
  REACT_APP_API_KEY,
  REACT_APP_USER_POOL_ID,
  REACT_APP_USER_POOL_WEB_CLIENT_ID,
  REACT_APP_IDENTITY_POOL_ID,
  REACT_APP_APPSYNC_GRAPHQL_ENDPOINT,
  REACT_APP_APPSYNC_REGION,
  REACT_APP_APPSYNC_AUTH_TYPE,
} from "@env";

const amplifyConfig = {
  Auth: {
    Cognito: {
      userPoolId: "ap-southeast-2_HlGnN9Vxh",
      identityPoolId: REACT_APP_IDENTITY_POOL_ID as string,
      userPoolClientId: REACT_APP_USER_POOL_WEB_CLIENT_ID as string,
    },
  },
  API: {
    GraphQL: {
      endpoint: REACT_APP_APPSYNC_GRAPHQL_ENDPOINT as string,
      region: REACT_APP_APPSYNC_REGION as string,
      defaultAuthMode: REACT_APP_APPSYNC_AUTH_TYPE,
      apiKey: REACT_APP_API_KEY,
    },
  },
};

export default amplifyConfig;

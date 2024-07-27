import {
  REACT_APP_API_KEY,
  REACT_APP_API_KEY_DEV,
  REACT_APP_APPSYNC_AUTH_TYPE,
  REACT_APP_APPSYNC_GRAPHQL_ENDPOINT,
  REACT_APP_APPSYNC_GRAPHQL_ENDPOINT_DEV,
  REACT_APP_APPSYNC_REGION,
  REACT_APP_IDENTITY_POOL_ID,
  REACT_APP_IDENTITY_POOL_ID_DEV,
  REACT_APP_S3_BUCKET,
  REACT_APP_S3_BUCKET_DEV,
  REACT_APP_USER_POOL_ID,
  REACT_APP_USER_POOL_ID_DEV,
  REACT_APP_USER_POOL_WEB_CLIENT_ID,
  REACT_APP_USER_POOL_WEB_CLIENT_ID_DEV,
} from "@env";

export const amplifyConfig = {
  Auth: {
    Cognito: {
      userPoolId: REACT_APP_USER_POOL_ID as string,
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
  Storage: {
    S3: {
      region: REACT_APP_APPSYNC_REGION as string,
      bucket: REACT_APP_S3_BUCKET as string,
    },
  },
};

export const amplifyConfigDev = {
  Auth: {
    Cognito: {
      userPoolId: REACT_APP_USER_POOL_ID_DEV as string,
      identityPoolId: REACT_APP_IDENTITY_POOL_ID_DEV as string,
      userPoolClientId: REACT_APP_USER_POOL_WEB_CLIENT_ID_DEV as string,
    },
  },
  API: {
    GraphQL: {
      endpoint: REACT_APP_APPSYNC_GRAPHQL_ENDPOINT_DEV as string,
      region: REACT_APP_APPSYNC_REGION as string,
      defaultAuthMode: REACT_APP_APPSYNC_AUTH_TYPE,
      apiKey: REACT_APP_API_KEY_DEV,
    },
  },
  Storage: {
    S3: {
      region: REACT_APP_APPSYNC_REGION as string,
      bucket: REACT_APP_S3_BUCKET_DEV as string,
    },
  },
};

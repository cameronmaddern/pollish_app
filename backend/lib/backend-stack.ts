import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { createAmplifyGraphQLAPI } from "./api/appsync";
import { createPollishAuth } from "./auth/cognito";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class BackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, env?: string) {
    super(scope, id);
    const appName = "pollish-app" + (env ? "-" + env : "");

    const pollishAuth = createPollishAuth(this, {
      appName,
    });

    const pollishAPI = createAmplifyGraphQLAPI(this, {
      appName,
      userpool: pollishAuth.userPool,
      identityPoolId: pollishAuth.identityPool.identityPoolId,
      authRole: pollishAuth.identityPool.authenticatedRole,
      unauthRole: pollishAuth.identityPool.unauthenticatedRole,
    });

    new cdk.CfnOutput(this, "UserPoolId", {
      value: pollishAuth.userPool.userPoolId,
    });
    new cdk.CfnOutput(this, "UserPoolClientId", {
      value: pollishAuth.userPoolClient.userPoolClientId,
    });
    new cdk.CfnOutput(this, "IdentityPoolId", {
      value: pollishAuth.identityPool.identityPoolId,
    });
  }
}

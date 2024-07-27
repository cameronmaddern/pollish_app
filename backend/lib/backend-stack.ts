import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { createAmplifyGraphQLAPI } from "./api/appsync";
import { createPollishAuth } from "./auth/cognito";
import { createS3Bucket } from "./s3/bucket";

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

    const pollishS3 = createS3Bucket(this, {
      authenticatedRole: pollishAuth.identityPool.authenticatedRole,
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

    new cdk.CfnOutput(this, "S3Bucket", {
      value: pollishS3.bucketName,
    });
  }
}

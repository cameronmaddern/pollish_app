import * as cdk from "aws-cdk-lib";
import * as iam from "aws-cdk-lib/aws-iam";
import * as s3 from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

type CreateS3BucketProps = {
  authenticatedRole: iam.IRole;
};

export function createS3Bucket(scope: Construct, props: CreateS3BucketProps) {
  const s3Bucket = new s3.Bucket(scope, "appBucket", {
    removalPolicy: cdk.RemovalPolicy.DESTROY,
    autoDeleteObjects: true,
  });

  s3Bucket.addToResourcePolicy(
    new iam.PolicyStatement({
      actions: ["s3:GetObject", "s3:PutObject"],
      resources: [s3Bucket.bucketArn, `${s3Bucket.bucketArn}/*`],
      principals: [new iam.ArnPrincipal(props.authenticatedRole.roleArn)],
    })
  );

  return s3Bucket;
}

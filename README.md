## Getting started

If this is your first time setting up the repo on a new machine, run `scripts/project_setup.sh` to check that relevant tools are installed.

## Setting up the backend

This section assumes that you have installed all tools previously missing from [Getting started](https://github.com/pollishmaster/pollish_app#getting-started). Then:

- Execute `aws configure sso`
- Follow the prompts on screen

  - SSO session name: `ANY_VALUE`
  - SSO start URL: `Copy the URL found in IAM Identity Center in the AWS console, it will be named 'AWS access portal URL'`
  - SSO region: `us-east-1`
  - SSO registration scopes: `LEAVE_AS_DEFAULT`
  - CLI default client Region: `ap-southeast-2`
  - CLI default output format: `LEAVE_AS_DEFAULT`
  - CLI profile name: `ANY_VALUE` (this value will be required moving forward)

NOTE: sso profile will require reauthentication after 7 days, to reauthenticate, run:

`aws login --profile <profile-name>`

Pushing changes:

- Navigate to the `backend` directory
- Execute `cdk deploy --profile <profile-name>`

## Pulling backend changes into the frontend

To pull the latest changes from graphql execute `scripts/fetch_graphql.sh`

This will ask for your `profile` and `API ID`

The API ID can be found in the aws console by navigating to `AWS App Sync`. (ensure your region is set to `ap-southeast-2`)

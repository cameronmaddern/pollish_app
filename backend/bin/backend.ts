#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import "source-map-support/register";

// organize-imports-ignore
import { BackendStack } from "../lib/backend-stack";

const app = new cdk.App();

// To deploy changes to the production stack uncomment the line below, this is commented out to product accidental deployments
// The below line should never be uncommented in master
// new BackendStack(app, "BackendStack");

// To test changes to the cdk uncomment the bottom 2 lines and replace YOUR_USERNAME with your username (e.g. CJM)
// To deploy changes to this new stack execute: cdk deploy BackendStack-Test --profile PROFILE_NAME
// The below lines should never be uncommented in master
const username = "slick";
new BackendStack(app, `BackendStack-Test-${username}`, `${username}-dev`);

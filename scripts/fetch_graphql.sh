#!/bin/bash

config_file="appsync_config.txt"

function check_aws_cli() {
    if ! command -v aws &> /dev/null
    then
        echo "AWS CLI is not installed. Please install it to use this script."
        echo "Visit https://aws.amazon.com/cli/ for installation instructions."
        exit 1
    fi
}

check_aws_cli

if [ -f "$config_file" ]; then
    read -r saved_api_id saved_profile < "$config_file"
    echo "Using saved API ID: $saved_api_id"
    echo "Using saved Profile: $saved_profile"
else
    saved_api_id=""
    saved_profile=""
fi

read -p "Enter the API ID [$saved_api_id]: " api_id
api_id=${api_id:-$saved_api_id}

read -p "Enter the profile name [$saved_profile]: " profile
profile=${profile:-$saved_profile}

echo "$api_id $profile" > "$config_file"

aws appsync get-introspection-schema --api-id $api_id --format SDL --profile $profile schema.graphql
npx @aws-amplify/cli codegen
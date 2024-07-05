#!/bin/bash

function check_aws_cli() {
    if ! command -v aws &> /dev/null; then
        if [[ "$OSTYPE" == "linux-gnu"* ]]; then
            echo "Linux system detected, installing AWS CLI..."
            mkdir "$cwd"/tmp && cd "$cwd"/tmp
            curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
            unzip awscliv2.zip
            sudo ./aws/install
            if command -v aws &> /dev/null; then
                echo "AWS CLI successfully installed. Cleaning up..."
                cd "$cwd"
                rm -rf tmp
            fi
        else
            echo "AWS CLI is not installed. Please install it to use this script."
            echo "Visit https://aws.amazon.com/cli/ for installation instructions."
            exit 1
        fi
    fi
}

function check_aws_cdk() {
    if ! command -v cdk &> /dev/null; then
        echo "AWS CDK not installed. Installing with npm..."
        npm install -g aws-cdk
    else
        echo "AWS CDK already installed..."
    fi
}

function package_install() {
    cd "$cwd"
    if [[ ! -d node_modules ]]; then
        echo "Installing frontend packages..."
        npm install
    else
        echo "node_modules already found at frontend..."
    fi

    cd "$cwd"/backend
    if [[ ! -d node_modules ]]; then
        echo "Installing backend packages..."
        npm install
    else
        echo "node_modules already found for backend..."
    fi
}

function android_studio() {
    if [[ ! -d /usr/local/android-studio ]]; then
        echo "Have you installed Android Studio?"
        echo "If not, follow the instructions at https://developer.android.com/studio/install"
    else
        echo "Android Studio installation found..."
    fi
}

cwd=$PWD

check_aws_cli
check_aws_cdk
package_install
android_studio

echo "Configuring AWS CDK profile..."
aws configure sso

exit

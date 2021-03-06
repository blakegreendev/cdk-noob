[![NPM version](https://badge.fury.io/js/cdk-bar.svg)](https://badge.fury.io/js/cdk-noob)
[![PyPI version](https://badge.fury.io/py/cdk-bar.svg)](https://badge.fury.io/py/cdk-noob)
![Release](https://github.com/bgreengo/cdk-noob/workflows/Release/badge.svg)
# cdk-noob

A demo construct library created with Projen

# Example

```typescript
const app = new cdk.App();

const stack = new cdk.Stack(app, 'my-demo-stack');

new Noob(stack, 'Noob');
```

# AWS SSO 

Configure your `default` AWS_PROFILE with AWS SSO
```sh
aws configure sso --profile default 
```

Configure `credential_process` for the `default` profile

```sh
aws configure set credential_process ${PWD}/.devcontainer/bin/aws-sso-credential-process
```

export `AWS_SHARED_CREDENTIALS_FILE` 

```sh
export AWS_SHARED_CREDENTIALS_FILE=~/.aws/config
```
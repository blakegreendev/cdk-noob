import * as cdk from '@aws-cdk/core';
import { Noob } from './index';

export class IntegTesting {
  readonly stack: cdk.Stack[];
  constructor() {
    const app = new cdk.App();

    const env = {
      region: process.env.CDK_DEFAULT_REGION,
      account: process.env.CDK_DEFAULT_ACCOUNT,
    };

    const stack = new cdk.Stack(app, 'my-noob-stack', { env });

    new Noob(stack, 'mynoob');

    this.stack = [stack];
  }
}

new IntegTesting();
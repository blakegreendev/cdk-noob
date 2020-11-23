import { App, Stack } from '@aws-cdk/core';
import { Noob } from '../src';
import '@aws-cdk/assert/jest';

test('create the default Noob construct', () => {
  //GIVEN
  const app = new App();
  const stack = new Stack(app, 'testing-stack');

  //WHEN
  new Noob(stack, 'Cluster');

  //THEN
  expect(stack).toHaveResource('AWS::ElasticLoadBalancingV2::LoadBalancer');
});
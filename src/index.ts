import * as ec2 from '@aws-cdk/aws-ec2';
import * as ecs from '@aws-cdk/aws-ecs';
import * as patterns from '@aws-cdk/aws-ecs-patterns';
import * as cdk from '@aws-cdk/core';

export interface NoobProps {
  readonly vpc?: ec2.IVpc;
}

export class Noob extends cdk.Construct {
  readonly endpoint: string;
  constructor(scope: cdk.Construct, id: string, props: NoobProps = {}) {
    super(scope, id);

    const vpc = props.vpc ?? new ec2.Vpc(this, 'vpc', { natGateways: 1 });
    const cluster = new ecs.Cluster(this, 'cluster', { vpc });
    const task = new ecs.FargateTaskDefinition(this, 'task', {
      cpu: 256,
      memoryLimitMiB: 512,
    });
    task.addContainer('flask', {
      image: ecs.ContainerImage.fromRegistry('pahud/flask-docker-sample:latest'),
    }).addPortMappings({ containerPort: 80 });
    const svc = new patterns.ApplicationLoadBalancedFargateService(this, 'service', {
      cluster,
      taskDefinition: task,
    });
    this.endpoint = `http://${svc.loadBalancer.loadBalancerDnsName}`;
  }
}
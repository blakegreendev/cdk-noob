const { AwsCdkConstructLibrary } = require('projen');

const project = new AwsCdkConstructLibrary({
  authorAddress: "blakegreen@msn.com",
  authorName: "Blake Green",
  cdkVersion: "1.73.0",
  name: "cdk-noob",
  repository: "https://github.com/bgreengo/cdk-noob",
  cdkDependencies: [
    '@aws-cdk/core',
    '@aws-cdk/aws-ec2',
    '@aws-cdk/aws-ecs',
    '@aws-cdk/aws-ecs-patterns',
  ],
  python: {
    distName: 'cdk-noob',
    module: 'cdk_noob',
  },                                               
  releaseBranches: ['main']
});

const common_exclude = ['cdk.out', 'cdk.context.json', 'images', 'yarn-error.log'];
project.npmignore.exclude(...common_exclude);
project.gitignore.exclude(...common_exclude);

project.synth();

import { defineConfig } from 'checkly'
import { Frequency } from 'checkly/constructs'

export default defineConfig({
  projectName: 'Deletable',
  logicalId: 'deletable-website',
  repoUrl: 'https://github.com/drtechventures/deletable-website',
  checks: {
    activated: true,
    muted: false,
    runtimeId: '2024.09',
    frequency: Frequency.EVERY_10M,
    locations: ['us-east-1', 'eu-west-1'],
    tags: ['website'],
    checkMatch: '**/__checks__/**/*.check.ts',
    environmentVariables: [],
  },
  cli: {
    runLocation: 'us-east-1',
    reporters: ['list'],
  },
})

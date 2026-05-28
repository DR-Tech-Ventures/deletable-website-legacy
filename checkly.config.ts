import { defineConfig } from 'checkly'
import { Frequency } from 'checkly/constructs'

export default defineConfig({
  projectName: 'Deletable',
  logicalId: 'deletable-website',
  repoUrl: 'https://github.com/drtechventures/deletable-website',
  checks: {
    activated: true,
    muted: false,
    runtimeId: '2025.04',
    frequency: Frequency.EVERY_10M,
    locations: ['us-east-1', 'eu-west-2'],
    tags: ['website'],
    checkMatch: '**/__checks__/**/*.check.ts',
    environmentVariables: [],
  },
  cli: {
    runLocation: 'us-east-1',
    reporters: ['list'],
  },
})

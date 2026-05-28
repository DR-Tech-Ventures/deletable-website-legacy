import { ApiCheck, AssertionBuilder } from 'checkly/constructs'

new ApiCheck('beta-status', {
  name: 'Beta page — status check',
  activated: true,
  request: {
    url: '{{ENVIRONMENT_URL}}/beta',
    method: 'GET',
    headers: [{ key: 'x-vercel-protection-bypass', value: '{{VERCEL_BYPASS_SECRET}}' }],
    assertions: [AssertionBuilder.statusCode().lessThan(400)],
  },
})

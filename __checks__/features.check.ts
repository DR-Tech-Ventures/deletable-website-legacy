import { ApiCheck, AssertionBuilder } from 'checkly/constructs'

new ApiCheck('features-status', {
  name: 'Features page — status check',
  activated: true,
  request: {
    url: '{{ENVIRONMENT_URL}}/features',
    method: 'GET',
    headers: [{ key: 'x-vercel-protection-bypass', value: '{{VERCEL_BYPASS_SECRET}}' }],
    assertions: [AssertionBuilder.statusCode().lessThan(400)],
  },
})

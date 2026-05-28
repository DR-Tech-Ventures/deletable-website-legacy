import { ApiCheck, AssertionBuilder } from 'checkly/constructs'

new ApiCheck('help-status', {
  name: 'Help page (contact form) — status check',
  activated: true,
  request: {
    url: '{{ENVIRONMENT_URL}}/help',
    method: 'GET',
    headers: [{ key: 'x-vercel-protection-bypass', value: '{{VERCEL_BYPASS_SECRET}}' }],
    assertions: [AssertionBuilder.statusCode().lessThan(400)],
  },
})

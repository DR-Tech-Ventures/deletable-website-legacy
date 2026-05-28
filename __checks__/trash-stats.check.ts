import { ApiCheck, AssertionBuilder } from 'checkly/constructs'

new ApiCheck('trash-stats-status', {
  name: 'Trash Stats page — status check',
  activated: true,
  request: {
    url: '{{ENVIRONMENT_URL}}/trash-stats',
    method: 'GET',
    headers: [{ key: 'x-vercel-protection-bypass', value: '{{VERCEL_BYPASS_SECRET}}' }],
    assertions: [AssertionBuilder.statusCode().lessThan(400)],
  },
})

import { ApiCheck, AssertionBuilder } from 'checkly/constructs'

new ApiCheck('homepage-status', {
  name: 'Homepage — status check',
  activated: true,
  request: {
    url: '{{ENVIRONMENT_URL}}/',
    method: 'GET',
    headers: [
      {
        key: 'x-vercel-protection-bypass',
        value: '{{VERCEL_BYPASS_SECRET}}',
      },
    ],
    assertions: [
      AssertionBuilder.statusCode().lessThan(400),
    ],
  },
})

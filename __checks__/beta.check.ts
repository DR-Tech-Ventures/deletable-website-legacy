import { ApiCheck, AssertionBuilder } from 'checkly/constructs'

new ApiCheck('beta-status', {
  name: 'Beta page — status check',
  activated: true,
  request: {
    url: '{{ENVIRONMENT_URL}}/beta',
    method: 'GET',
    headers: [{ key: 'x-vercel-protection-bypass', value: '{{VERCEL_BYPASS_SECRET}}' }],
    // /beta is password-gated: production returns 200 (lock screen), preview
    // deployments return 401 (Vercel protection). Accept anything < 500 —
    // the goal is uptime monitoring, not verifying authentication state.
    assertions: [AssertionBuilder.statusCode().lessThan(500)],
  },
})

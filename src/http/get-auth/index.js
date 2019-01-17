// Begin enables secure sessions, express-style middleware, and more:
// let begin = require('@architect/functions')

// TODO: modify the body object!
let body = `
<a href="https://slack.com/oauth/authorize?scope=incoming-webhook,commands,bot&client_id=104869211713.525617032147"><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a>
`

// Basic Begin HTTP GET Function
exports.handler = async function http(req) {
  console.log(req)
  return {
    type: 'text/html; charset=utf8',
    body
  }
}

// Learn more about building Begin HTTP functions:
//   https://docs.begin.com/en/functions/http/

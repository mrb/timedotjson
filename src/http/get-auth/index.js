// Begin enables secure sessions, express-style middleware, and more:
// let begin = require('@architect/functions')


exports.handler = async function http(req) {

  // these need to be in the body of the function to work locally
  // also slack client ids are large floats which makes the JS runtime barf so we have quote/escape
  let client_id = process.env.CLIENT_ID.replace(/"/g, '')
  let redirect_uri = process.env.REDIRECT_URI

  let body = `
<a href=https://slack.com/oauth/authorize?scope=incoming-webhook,commands,bot&client_id=${client_id}&redirect_uri=${redirect_uri}><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a>
`
  return {
    type: 'text/html; charset=utf8',
    body
  }
}

// Learn more about building Begin HTTP functions:
//   https://docs.begin.com/en/functions/http/

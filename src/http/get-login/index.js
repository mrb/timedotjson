exports.handler = async function http(req) {

  // these need to be in the body of the function to work locally
  // also slack client ids are large floats which makes the JS runtime barf so we have quote/escape
  let client_id = process.env.CLIENT_ID.replace(/"/g, '')

  let body = `
  <a href="https://slack.com/oauth/authorize?scope=identity.basic&client_id=${client_id}"><img alt="Sign in with Slack" height="40" width="172" src="https://platform.slack-edge.com/img/sign_in_with_slack.png" srcset="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x" /></a>
`
  return {
    type: 'text/html; charset=utf8',
    body
  }
}

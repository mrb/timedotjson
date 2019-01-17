let tiny = require('tiny-json-http')

exports.handler = async function http(req) {
  let url = 'https://slack.com/api/oauth.access?code='
  let data = {
    code: req.query.code,
    client_id: process.env.CLIENT_ID.replace(/"/g, ''),
    client_secret: process.env.CLIENT_SECRET,
    redirect_uri: process.env.REDIRECT_URI
  }
  let result = await tiny.get({url, data})
  return {
    status: 200,
    body: JSON.stringify(result.body)
  }
}

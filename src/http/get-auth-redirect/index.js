let begin = require('@architect/functions')
let tiny = require('tiny-json-http')

async function route(req, res) {
  let url = 'https://slack.com/api/oauth.access?code='
  let data = {
    code: req.query.code,
    client_id: process.env.CLIENT_ID.replace(/"/g, ''),
    client_secret: process.env.CLIENT_SECRET,
    redirect_uri: process.env.REDIRECT_URI
  }

  let result = await tiny.get({url, data})

  if (result.ok == true){
    var account = {
      access_token: result.access_token,
      user_name: result.user.name,
      id: result.user.id
    }
    res({
      session: {account},
      location: req._url('/')
    })
  } else {
    res({
      status: 403,
      body: "Unauthorized"
    })
  }
}

exports.handler = begin.http(route)

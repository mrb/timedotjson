let begin = require('@architect/functions')
let tiny = require('tiny-json-http')

async function http(req, res) {
  let url = 'https://slack.com/api/oauth.access?code='
  let data = {
    code: req.query.code,
    client_id: process.env.CLIENT_ID.replace(/"/g, ''),
    client_secret: process.env.CLIENT_SECRET,
    redirect_uri: process.env.REDIRECT_URI
  }

  let result = await tiny.get({url, data})

  if (result.ok == True){
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
    console.log("!")
    res({
      status: 403,
      body: "Unauthorized"
    })
  }
}

exports.handler = begin.html.get(http)

// Response
// {
//   ok: true,
//   access_token: "xoxp-104869211713-105742295013-527822168966-a28da795f9640910935d56d421795e0a",
//   scope: "identity.basic",
//   user: {
//     name: "Michael Bernstein",
//     id: "U33MU8P0D"
//   },
//   team: {
//     id: "T32RK67LZ"
//   }
// }

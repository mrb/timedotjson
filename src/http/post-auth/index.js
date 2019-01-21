let begin = require('@architect/functions')

function auth(req, res) {
  var isLoggedIn = req.body.email === 'admin' && req.body.password === 'a-secure-password'
  res({
    session: {isLoggedIn},
    location: '/'
  })
}

exports.handler = begin.http(auth)

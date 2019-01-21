let begin = require('@architect/functions')

function auth(req, res, next) {
  if (req.session && req.session.isLoggedIn) {
    next()
  }
  else {
    res({
      location: '/login'
    })
  }
}

function index(req, res) {
  res({
    html: `Hi there, you're logged in! <a href="/logout">logout</a>`
  })
}

exports.handler = begin.http(auth, index)

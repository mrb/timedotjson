let begin = require('@architect/functions')

async function auth(req, res, next) {
  try {
    if (req.session && req.session.isLoggedIn) {
      next()
    }
    else {
      res({
        location: '/login'
      })
    }
  } catch(e) {
    console.log(e)
  }
}

async function index(req, res) {
  try {
    res({
      html: `Hi there, you're logged in! <a href="/logout">logout</a>`
    })
  } catch(e) {
    console.log(e)
  }
}

exports.handler = begin.http(auth, index)

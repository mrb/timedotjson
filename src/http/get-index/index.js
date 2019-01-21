console.log('-2')

let begin = require('@architect/functions')

console.log('-1')


async function auth(req, res, next) {
  console.log('0')

  try {
    console.log('1')
    if (req.session && req.session.isLoggedIn) {
      console.log('2')

      next()
    }
    else {
      console.log('3')

      res({
        location: '/login'
      })
      console.log('4')

    }
  } catch(e) {
    console.log(e)
  }
}

async function index(req, res) {
  console.log('5')

  try {
    console.log('6')

    res({
      html: `Hi there, you're logged in! <a href="/logout">logout</a>`
    })
    console.log('7')

  } catch(e) {
    console.log('8')

    console.log(e)
  }
}


try {
  exports.handler = begin.http(auth, index)
} catch(e) {
  console.log(e)
}

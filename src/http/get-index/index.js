let begin = require('@architect/functions')
let static = begin.http.helpers.static

async function route(req, res) {
  try {
    console.log(req)

    let image = static('/ornette.jpg')

    let body = `
    <!doctype html>
    <html>
      <head>
        <title>This is fun!</title>
      </head>
      <body>Hello ƛ</body>
      <img src=${image}>
    </html>
    `

    res({ html: body })
  } catch(e) {
    console.log(e)
  }
}

exports.handler = begin.http(route)

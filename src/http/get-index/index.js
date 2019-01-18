exports.handler = async function http(req) {
  console.log(req)

  let img = staticAsset('ornette.jpg')

  let body = `
  <!doctype html>
  <html>
    <head>
      <title>This is fun!</title>
    </head>
    <body>Hello ƛ</body>
    <img src=${img}>
  </html>
  `

  return {
    type: 'text/html; charset=utf8',
    body
  }
}

function staticAsset(filename) {

  // these variables are always available to all lambdas
  let env = process.env.NODE_ENV
  let app = process.env.ARC_APP_NAME

  // early exit (if we're testing then we can assume the sandbox mounted .static)
  if (env === 'testing') {
    return '/' + filename
  }
  else {
    // otherwise use s3 for staging and cloudfront for production
    let S3Staging = `https://s3-us-west-1.amazonaws.com/begin-functions-staging/${app}`
    let CFProduction = `https://static.begin.app/${app}`
    let origin = env === 'staging'? S3Staging : CFProduction

    return `${origin}/${filename}`
  }
}

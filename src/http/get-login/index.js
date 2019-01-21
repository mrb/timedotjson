exports.handler = async function http(req) {
  let body = `
  <form target="_blank" action="/auth" method="POST">
    Username:<br>
    <input type="text" name="email"><br>
    Last name:<br>
    <input type="password" name="password"><br><br>
    <input type="submit" value="Submit">
  </form>
  `
  return {
    type: 'text/html; charset=utf8',
    body
  }
}

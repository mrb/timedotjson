exports.handler = async function http(req) {
  var timeNow = Date.now()

  return {
    type: 'application/json',
    status: 201,
    body: JSON.stringify({time: timeNow})
  }
}

// Begin enables secure sessions, express-style middleware, and more:
const https = require("https")

// Basic Begin HTTP GET Function
exports.handler = async function http(req) {
  console.log(req.body)
  var options = {
    uri: 'https://slack.com/api/oauth.access?code='
      +req.query.code+
      '&client_id='+process.env.CLIENT_ID+
      '&client_secret='+process.env.CLIENT_SECRET+
      '&redirect_uri='+process.env.REDIRECT_URI,
    method: 'GET'
  }

  https.get(options.uri, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      var JSONresponse = JSON.parse(body)
      if (!JSONresponse.ok){
          console.log(JSONresponse)

          return {
            status: 200,
            type: 'application/json',
            body: "Error encountered: \n"+JSON.stringify(JSONresponse)
          }

      } else {
          console.log(JSONresponse)

          return {
            status: 201,
            type: 'application/json',
            body: "Success!"
          }
      }
    })
  })
  return { status: 200 }
}







// Learn more about building Begin HTTP functions:
//   https://docs.begin.com/en/functions/http/

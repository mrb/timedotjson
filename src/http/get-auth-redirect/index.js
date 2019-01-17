// Begin enables secure sessions, express-style middleware, and more:
// let begin = require('@architect/functions')

// Basic Begin HTTP GET Function
exports.handler = async function http(req) {
  console.log(req)
  var options = {
      uri: 'https://slack.com/api/oauth.access?code='
          +req.query.code+
          '&client_id='+process.env.CLIENT_ID+
          '&client_secret='+process.env.CLIENT_SECRET+
          '&redirect_uri='+process.env.REDIRECT_URI,
      method: 'GET'
  }

  var JSONresponse = JSON.parse(req.body)

  if (!JSONresponse.ok){
      console.log(JSONresponse)

      return {
        type: 'application/json',
        status: 200,
        body: "Error encountered: \n"+JSON.stringify(JSONresponse)
      }
  }else{
      console.log(JSONresponse)

      return {
        type: 'application/json',
        status: 201,
        body: ("Success!")
      }
  }



  // app.get('/auth/redirect', (req, res) =>{
  //
  //   request(options, (error, response, body) => {
  //       var JSONresponse = JSON.parse(body)
  //       if (!JSONresponse.ok){
  //           console.log(JSONresponse)
  //           res.send("Error encountered: \n"+JSON.stringify(JSONresponse)).status(200).end()
  //       }else{
  //           console.log(JSONresponse)
  //           res.send("Success!")
  //       }
  //   })
  // })
}

// Learn more about building Begin HTTP functions:
//   https://docs.begin.com/en/functions/http/

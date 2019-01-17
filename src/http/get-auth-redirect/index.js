// Begin enables secure sessions, express-style middleware, and more:
let begin = require('@architect/functions')
var request = require('request')

// Basic Begin HTTP GET Function
async function route(req, res) {
  console.log("!")
  console.log(req.body)
  var options = {
    uri: 'https://slack.com/api/oauth.access?code='
      +req.query.code+
      '&client_id='+process.env.CLIENT_ID+
      '&client_secret='+process.env.CLIENT_SECRET+
      '&redirect_uri='+process.env.REDIRECT_URI,
    method: 'GET'
  }

  request(options, (error, response, body) => {
    console.log("!!")

    var JSONresponse = JSON.parse(body)
    if (!JSONresponse.ok){
      console.log("!!!")

      console.log(JSONresponse)

      res({
            json:"Error encountered: \n"+JSON.stringify(JSONresponse),
            status: 200
          })
    }else{
      console.log("!!!!")

      console.log(JSONresponse)

      res({json: "Success!", status: 201})
    }
  })
}

exports.handler = begin.http(route)


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


// Learn more about building Begin HTTP functions:
//   https://docs.begin.com/en/functions/http/

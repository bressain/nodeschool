var http = require('http')

http.get(process.argv[2], function (response) {
  var payload = ''
  response.setEncoding('utf8')
  response.on('data', function (data) {
    payload += data
  })
  response.on('end', function () {
    console.log(payload.length)
    console.log(payload)
  })
})

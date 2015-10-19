var http = require('http')
var url1Data
var url2Data
var url3Data

getData(process.argv[2], function (data) {
  url1Data = data
  showResult()
})
getData(process.argv[3], function (data) {
  url2Data = data
  showResult()
})
getData(process.argv[4], function (data) {
  url3Data = data
  showResult()
})

function showResult() {
  if (url1Data && url2Data && url3Data) {
    console.log(url1Data)
    console.log(url2Data)
    console.log(url3Data)
  }
}

function getData (url, callback) {
  http.get(url, function (response) {
    var payload = ''
    response.setEncoding('utf8')
    response.on('data', function (data) {
      payload += data
    })
    response.on('end', function () {
      callback(payload)
    })
  })
}

var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var date = new Date(parsedUrl.query.iso)
  var result

  if (parsedUrl.pathname === '/api/parsetime')
    result = parseTime(date)
  else if (parsedUrl.pathname === '/api/unixtime')
    result = unixTime(date)

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(process.argv[2])

function parseTime (date) {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  }
}

function unixTime (date) {
  return { unixtime: date.valueOf() }
}

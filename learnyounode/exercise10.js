var net = require('net')
var dateFormat = require('dateformat')

var server = net.createServer(function (socket) {
  socket.end(dateFormat(new Date(), 'yyyy-mm-dd HH:MM') + '\n')
})
server.listen(process.argv[2])

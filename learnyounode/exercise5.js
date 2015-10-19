var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (x) {
    if (path.extname(x).slice(1) === process.argv[3])
      console.log(x)
  })
})

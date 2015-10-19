var fs = require('fs')
var path = require('path')

module.exports = function (dirName, ext, callback) {
  fs.readdir(dirName, function (err, list) {
    if (err) return callback(err)

    callback(null, list.filter(function (x) {
      return path.extname(x).slice(1) === ext
    }))
  })
}

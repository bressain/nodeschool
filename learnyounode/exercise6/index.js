var fileReducer = require('./file-reducer')

fileReducer(process.argv[2], process.argv[3], function (err, list) {
  if (err) {
    console.log(err)
  } else {
    list.forEach(function (x) {
      console.log(x)
    })
  }
})

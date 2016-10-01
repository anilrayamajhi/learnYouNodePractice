var fs = require('fs'), path = require('path'), ext = "." +process.argv[3];

fs.readdir(process.argv[2], ext , function (err, list) {
  list.forEach(function(el) {return (path.extname(el) === ext) ?  console.log(el) : null});
});
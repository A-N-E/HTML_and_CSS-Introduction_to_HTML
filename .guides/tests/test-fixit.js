var fs = require('fs');
var cheerio = require('cheerio');

exports.test = function(callback) {

  $ = cheerio.load(fs.readFileSync('/home/codio/workspace/06-fixit/index.html'));

  if( $("h2").text() == "Smaller Heading") {
    callback({syserr: false, success: true, msg: 'Well done!!!'});
  }
  else {
    callback({syserr: false, success: false,  msg: 'You\'ve not yet fixed it!'});
  }

}
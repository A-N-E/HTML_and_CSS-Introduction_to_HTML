var fs = require('fs');
var cheerio = require('cheerio');

var $ = cheerio.load(fs.readFileSync('/home/codio/workspace/08-img/index.html'));

var errors = [];

if ($("img").attr("src") != "not-cute.jpg") {
    errors.push("not-cute.jpg should be displayed")
}

if( errors.length <= 0 ) {
    process.stdout.write('Well done!')
    process.exit(0);
}
else {
    process.stdout.write(errors.join("\n"))
    process.exit(1);
}

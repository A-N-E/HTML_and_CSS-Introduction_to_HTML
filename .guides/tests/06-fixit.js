var fs = require('fs');
var cheerio = require('cheerio');

$ = cheerio.load(fs.readFileSync('/home/codio/workspace/06-fixit/index.html'));

if( $("h2").text().trim().toLowerCase() == "smaller heading") {
    process.stdout.write('Well done!')
    process.exit(0);
}
else {
    process.stdout.write('You\'ve not yet fixed it!')
    process.exit(1);
}

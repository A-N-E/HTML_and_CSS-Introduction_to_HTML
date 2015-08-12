var fs = require('fs');
var cheerio = require('cheerio');

var $ = cheerio.load(fs.readFileSync('/home/codio/workspace/07-formatting/index.html'));

var errors = [];

if ($("p b").text().trim().toLowerCase() != "bold") {
    errors.push("Bold is not correct")
}

if ($("p u").text().trim().toLowerCase() != "underlined") {
    errors.push("Underlined is not correct")
}

if ($("p i").text().trim().toLowerCase() != "italic") {
    errors.push("Italic is not correct")
}



if( errors.length <= 0 ) {
    process.stdout.write('Well done!!!')
    process.exit(0);
}
else {
    process.stdout.write(errors.join("\n"))
    process.exit(1);
}

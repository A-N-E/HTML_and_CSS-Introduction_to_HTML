var fs = require('fs');
var cheerio = require('cheerio');

var $ = cheerio.load(fs.readFileSync('/home/codio/workspace/12-final-challenge/index.html'));

var errors = [];

if ($("h1").length <= 0) {
    errors.push("There is no first level header");
}

if ($("h1 + p").length <= 0) {
    errors.push("There is no p after the first level header");
}

if ($("h2").text().trim().toLowerCase() != "images") {
    errors.push("There is no h2 with the text 'Images'");
}

if ($("img:nth-of-type(1)").attr("src") != "cute.jpg") {
    errors.push("There is no image cute.jpg after the h2");
}

if ($("p:nth-of-type(2)").length <= 0) {
    errors.push("There is no p after the first image");
}

if ($("img:nth-of-type(2)").attr("src") != "not-cute.jpg") {
    errors.push("There is no image not-cute.jpg ");
}

if ($("p:nth-of-type(3)").length <= 0) {
    errors.push("There is no last paragraph");
}

if ($("p:nth-of-type(3) b").text().trim().toLowerCase() != "ugly") {
    errors.push("There is no word 'ugly' in bold in the last paragraph");
}



if( errors.length <= 0 ) {
    process.stdout.write('Well done!')
    process.exit(0);
}
else {
    process.stdout.write(errors.join("\n"))
    process.exit(1);
}

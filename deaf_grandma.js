const io = require('console-read-write');

async function deafGrandma() {
    goodbye = "GOODBYE!"
    response = await io.read()
    var n = response.search(/([a-z])\w+/)
    if (response == "") {
        io.write("WHAT?!");
        deafGrandma();
    } 
    if (n == 0) {
        io.write("SPEAK UP, KID!");
        deafGrandma();
    } 
    if (response != "" && n == -1 && response != goodbye) {
        io.write("NO, NOT SINCE 1946!");
        deafGrandma();
    }
    if (response == goodbye) {
        io.write("LEAVING SO SOON?")
        second = await io.read()
        if (second == goodbye) {
            io.write("LATER, SKATER!");
            process.exit(0);
        } else {
            if (second == "") {
                io.write("WHAT?!");
                deafGrandma();
            } 
            if (n == 0) {
                io.write("SPEAK UP, KID!");
                deafGrandma();
            } 
            if (second != "" && n == -1 && second != goodbye) {
                io.write("NO, NOT SINCE 1946!");
                deafGrandma();
            }
            deafGrandma();
        }
    }
};

deafGrandma();
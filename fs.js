const fs = require("fs");

function findFile(){
    const file = fs.readdirSync("./");
    return file.some(f => f === "text.txt");
}

module.exports = { findFile };
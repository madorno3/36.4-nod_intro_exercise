// STEP ONE
const fs = require('fs');
const process = require('process');

function cat(path){
    fs.readFile(path, 'utf8', (err, data) =>{
        if (err) {
            console.error("error");
            process.exit(1)
        } else {
            console.log(data)
        }
    });

}



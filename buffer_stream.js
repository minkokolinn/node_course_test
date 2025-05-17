const fs = require("fs");

const readStream = fs.createReadStream("./docs/file.txt");

readStream.on("data",data=>{
    console.log(data.toString());
    console.log("===chunk===");
});

const writeStream = fs.createWriteStream("./docs/write.txt");
readStream.pipe(writeStream);
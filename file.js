const fs = require("fs")

// console.log(fs.existsSync("./docs/hello.txt"));

// fs.writeFile("./docs/hello.txt","This is Lesserafim",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("write success");
//     }
// })
// if(fs.existsSync("./docs/hello.txt")){
//     fs.readFile("./docs/hello.txt",(err,data)=>{
//         console.log(data.toString());
//     })
// }

// fs.unlink("./docs/hello.txt",(err)=>{
//     if(err){
//         console.log(err);
//     }
// })
// fs.mkdir("./newFolder",(err)=>{
//     if(err){
//         console.log(err);
//     }
// })
fs.rmdir("./newFolder",(err)=>{
    if(err){
        console.log(err);
    }
})
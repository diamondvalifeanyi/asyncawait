
const fs = require("fs");

function readPromise (file, content){

    return new Promise((resolve, reject)=>{
        fs.appendFile(file, content, (error, data)=>{
            if (error){
                reject(error)
            }else {
                resolve ()
                console.log("good")
            }
            });
        
            fs.readFile(file, "utf-8", (data)=>{
                if (error){
                    reject(error)
                }else{
                    resolve(data)
                    console.log("read successful")
                }
            });
    });
}


readPromise("./class.txt", "\n class stuff and it's okay");
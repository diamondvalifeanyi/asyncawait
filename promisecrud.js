const fs = require("fs")

function readPromise (){

    return new Promise((resolve, reject)=>{
        fs.readFile("./class.txt", (error, data)=>{
            if(error){
                reject(error)
            }else{
                resolve(data)
                console.log(data.toString())
            }

        });
    });
}

readPromise()
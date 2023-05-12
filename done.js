const fs = require("fs");

const readMyFile = (path, encode) =>{
    return new Promise((resolve, reject)=>{
        fs.readFile(path, encode, function(err, data){
            if (err){
                reject (err)
            }else{
                resolve (data)
                console.log(data.toString())
            }
        });
    })
}

function appendMyFile (path, content){
    return new Promise(function (resolve, reject){
        fs.appendFile(path, content, function(err, data){
            if (err){
                reject(err)
            }else {
                resolve()
            }
        });
    })
}

// function deleteMyFile (path, content){
//     return new Promise(function (resolve, reject){
//         fs.unlink(path, content, function(err, data){
//             if (err){
//                 reject(err)
//             }else {
//                 resolve()
//             }
//         });
//     })
// }


const solution = async ()=>{
    try{
        await readMyFile("./class.txt");
        await appendMyFile("./class.txt", "\n new content");
        await readMyFile("./class.txt");
        // await deleteMyFile("./class.txt");
    }catch (e){
        console.log(e.message)
    }
}

solution();

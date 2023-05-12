const fs = require("fs");

const readFiles = async() => {
    try{
        await fs.appendFile("./class.txt",  "\n created in class", (d) => {
            console.log("done")

        });
    }catch (e) {
        console.log(e)
    }
}

    readFiles();
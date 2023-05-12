const fs = require("fs");

const readFiles = async() => {
    try{
        await fs.unlink("./sample.txt", (d) => {
            console.log("done")

        });
    }catch (e) {
        console.log(e)
    }
}

    readFiles();
const fs = require("fs");

const readFiles = async() => {
    try{
        await fs.writeFile("class.txt", "my new file", ( d) => {
            console.log("success")

        });
    }catch (e) {
        console.log(e)
    }
}

    readFiles();
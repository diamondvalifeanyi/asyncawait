const fs = require("fs");

const readfiles = async() => {
    try{
        await fs.readFile("./sample.txt", "utf-8", (e, d) => {
            console.log(d.toString())

        });
    }catch (e) {
        console.log(e)
    }
}

readfiles();
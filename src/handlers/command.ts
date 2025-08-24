import * as fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

try {
    const dirContents = fs.readdirSync(__dirname);
    let jsFiles = dirContents.filter(file => file.endsWith(".js"));

    for (let file of jsFiles) {

        console.log(path.join(__dirname, file));
    }
    // console.log(res2);

}
catch(err) {
    console.error("Could not open file");
}
finally {
    // fs.closeSync()
}
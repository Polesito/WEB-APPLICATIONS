
import { readFile } from "fs"


// This call is not blocking (program does not stop)
readFile("README.md", (err, data) => {
    if (err) {
        console.log(`Could not read file: `, err);
        return;
    }
    let text = data.toString();     // convert to buff
    console.log(text)
});

console.log(`-------------FINISH------------`);
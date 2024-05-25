/**
 * Async fun: Any function that returns a promise
 */

import { readFile } from "fs/promises"

readFile("filename.txt")
    .then((buff) => {
        const filename = buff.toString();
        return readFile(filename);

    })
    .then((buffer) => {  
        const content = buffer.toString();
        console.log(content);
    })

console.log("---------FINISH----------");
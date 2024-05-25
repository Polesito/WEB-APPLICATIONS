/**
 * Async fun: Any function that returns a promise
 */

import { readFile } from "fs/promises"

readFile("tsconfig.json").then((buff) => {
    const tsconfig = buff.toString();
    console.log(tsconfig);
})

console.log("---------FINISH----------");
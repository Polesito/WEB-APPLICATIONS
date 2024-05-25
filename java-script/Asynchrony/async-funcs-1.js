/**
 * Async fun: Any function that returns a promise
 */

import { readFile } from "fs/promises"

const promise = readFile("tsconfig.json");
promise.then((buff) => {
    const tsconfig = buff.toString();
    console.log(tsconfig);
})

console.log("---------FINISH----------");
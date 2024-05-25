
import { readFileSync } from "fs"

let buf = readFileSync("README.md");    // Sync functional call (because it waits)
let text = buf.toString();  // Convert the buffer to a string
console.log(text);

console.log(`-------------FINISH------------`);
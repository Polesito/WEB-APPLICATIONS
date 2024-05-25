
import { readFile } from "fs/promises"

const buffer = await readFile("filename.txt");
const filename = buffer.toString();
const buffer2 = await readFile(filename);
const content = buffer2.toString();
console.log(content);
console.log("---------FINISH----------");

import { readFile } from "fs"

readFile("filename.txt", (err, data) => {
    if (err) {
        console.log(err);
        return;
    } else {
        const filename = data.toString();
        readFile(filename, (err, data) => {
            if (err) {
                console.log(err);
                return;
            } else {
                const content = data.toString();
                console.log(content);
            }
        })
    }
});
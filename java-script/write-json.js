
let obj = {
    a: 1,
    b: true,
    c: "hi!"
};

let jsonText = JSON.stringify(obj);
Bun.write("objext.json", jsonText);
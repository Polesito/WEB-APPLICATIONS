
let paragraphs = "";
for (let i = 1; i < 100; i++) {
    paragraphs += `<p>${i}</p>\n`;
}

let html = `<!doctype html>
<html>
    <head>
        <title>Ten thousand numbers</title>
    </head>
    <body>
        ${String(new Date())}
        <h1>Ten thousand numbers</h1>
        ${paragraphs}
    </body>
</html>
`
Bun.write("numbers.html", html)
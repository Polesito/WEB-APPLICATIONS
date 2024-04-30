
let obj = {
    port: 8888,
    fetch(req) {
        return new Response(`<!doctype html>
            <html>
                <head>
                
                </head>
                <body>
                    <h1>${String(new Date())}</h1>
                </body>
            </html>
        `);
    }
}

Bun.serve({
    port: 8888,
    fetch(req) {
        return new Response(`<!doctype html>
            <html>
                <head>
                    <meta charset="ytf-8">
                </head>
                <body>
                    <h1>${String(new Date())}</h1>
                </body>
            </html>
        `, {
            headers: {
                "Content-Type": "text/html"
            }
        });
    }
});
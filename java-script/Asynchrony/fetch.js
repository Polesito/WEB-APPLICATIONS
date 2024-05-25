
fetch(`https://www.upc.edu`)        // Fetch is allways async
    .then((response) => response.text())
    .then((text) => console.log(`Got text of ${text.length} characters`))


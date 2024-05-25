
// Async - mark functions as asynchronous
// await - can only be used in async functions or top-level
//       - "waits" for promises to resolve(letting Javascript 
//         work while the promise is not resolve)

const main = async () => {
    
    const response = await fetch(`https://www.upc.edu`);
    const text = await response.text();
    console.log(`Got text of ${text.length} characters`)
    
}

await main();
console.log("-------------FINISH----------------");
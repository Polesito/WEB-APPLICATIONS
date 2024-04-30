
let numbers = "";
for (let i = 1; i <= 1000000; i++) {
    numbers += `${i}\n`;

}
Bun.write("a_million.txt", numbers);                    // Only works with Bun installed
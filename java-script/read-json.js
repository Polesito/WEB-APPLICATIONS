
let file = Bun.file("lunch.json");
let fileText = await file.text();
let obj = JSON.parse(fileText);

console.log(obj);



// Fer una web amb una api publica (JSON) que mostri les dades.
for (let idx = 0; idx < 1_000_000; idx++) {
    console.log(`const REGEX_${idx} = /^\d+${idx}\\.$/;`);
}

console.log(``);
console.log(`const el = document.createElement("h1");`);
console.log(`el.innerText = "Done!";`);
console.log(`document.body.appendChild(el);`);


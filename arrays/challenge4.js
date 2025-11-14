const prompt = require("prompt-sync")();

let arr = [];

for (let ndx = 0; ndx < 3; ndx++) {
  const input = prompt("entrer les chaines : ");
  arr.push(input);
}

const search = prompt("Entrez la chaîne à rechercher : ");

const result = arr.find((str) => str === search);

result
  ? console.log(
      `La chaîne ${search} a été trouvée à la position ${arr.indexOf(search)}`
    )
  : console.log("chaine introuvable !");

const prompt = require("prompt-sync")();

let input = "";
let person = "";

const persons = [];
input = prompt(
  "Choose commande (add / remove) to finish type fin : "
).toLowerCase();

while (input !== "fin") {
  if (input === "add") {
    person = prompt("enter a person = ");
    persons.push(person);
    console.log(`${person} added successfully`);
  } else if (input === "remove") {
    persons.length > 0 ? persons.shift() : console.log("array is empty");
  } else {
    console.log("commande not found");
  }

  input = prompt("type add / remove / fin = ").toLowerCase();
}

console.log(persons);

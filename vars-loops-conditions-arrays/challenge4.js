const prompt = require("prompt-sync")();

const nom = prompt("entrer votre nom : ");
const signe = prompt("entrer votre signe astroligique : ");

const actions = ["Tu vas decouvrir", "Attention a", "Ne refuse pas"];
const objets = ["une opportunite", "une pizza", "un bug", "un pigeon"];
const situation = ["au travail", "en ligne", "dans tes reves"];

const RandomChoice = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

console.log(
  `${nom} ${signe} => ${RandomChoice(actions)} ${RandomChoice(
    objets
  )} ${RandomChoice(situation)}`
);

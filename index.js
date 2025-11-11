// challenge 1
const prompt = require("prompt-sync")();

const nom = prompt("votre nom => ");
const prenom = prompt("votre prenom => ");
const age = prompt("votre age => ");
const sexe = prompt("votre sexe => ");
const numero = prompt("votre numero de telephone => ");
console.log(nom, prenom, age, sexe, numero);

// challenge 2 :
const ConvertoCelToFah = (Cel) => {
  return Cel * 1.8 + 32;
};

// challenge  3
var a = "something !";
let b = a;
let c = b;
var a = c;

// challenge  4
const Operations = (a, b) => {
  console.log(
    ` a+b : ${a + b} \n , a-b : ${a - b} \n , a*b : ${a * b} , a/b : ${
      a / b
    } , a%b : ${a % b}`
  );
};

// challenge 5
const SumMoy = (a, b, c, d) => {
  const somme = a + b + c + d;
  console.log(`la somme : ${somme} \n la moyenne : ${somme / 4}`);
};

// challenge  6
const TempsDeTrajet = (vitesse, distance) => {
  return distance / vitesse;
};

// challenge 7
const Circonference = (rayon) => {
  return 2 * Math.PI * rayon;
};

// challenge 8
const ReverseInt = (num) => {
  const arr = [num];
  return Number(arr.join("").split("").reverse().join(""));
};

// challenge 9
const KmToMile = (km) => {
  return km / 1.609;
};

// challenge 10
const MoneyConverter = (euro) => {
  return euro / 10.61;
};

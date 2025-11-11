// challenge 1
const prompt = require("prompt-sync")();

const nom = prompt("votre nom => ");
const prenom = prompt("votre prenom => ");
const age = prompt("votre age => ");
const sexe = prompt("votre sexe => ");
const numero = prompt("votre numero de telephone => ");
console.log(nom, prenom, age, sexe, numero);

// challenge 2 :
const ConvertoCelToFah = () => {
  const Cel = prompt("enter temp : ");
  return Cel * 1.8 + 32;
};

// challenge  3
var a = "something !";
let b = a;
let c = b;
var a = c;

// challenge  4
const Operations = () => {
  const a = prompt("enter number a : ");
  const b = prompt("enter number b : ");

  console.log(
    ` a+b : ${a + b} \n , a-b : ${a - b} \n , a*b : ${a * b} , a/b : ${
      a / b
    } , a%b : ${a % b}`
  );
};

// challenge 5
const SumMoy = () => {
  const a = prompt("enter number a : ");
  const b = prompt("enter number b : ");
  const c = prompt("enter number c : ");
  const d = prompt("enter number d : ");
  const somme = a + b + c + d;
  console.log(`la somme : ${somme} \n la moyenne : ${somme / 4}`);
};

// challenge  6
const TempsDeTrajet = () => {
  const distance = prompt("enter distance : ");
  const vitesse = prompt("enter vitesse : ");
  return distance / vitesse;
};

// challenge 7
const Circonference = () => {
  const rayon = prompt("enter rayon: ");
  return 2 * Math.PI * rayon;
};

// challenge 8
const ReverseInt = () => {
  const num = prompt("enter a number contains tree chars : ");

  const arr = [num];
  return Number(arr.join("").split("").reverse().join(""));
};

console.log(ReverseInt());
// challenge 9
const KmToMile = () => {
  const km = prompt("enter a distance in km: ");

  return km / 1.609;
};

// challenge 10
const MoneyConverter = () => {
  const euro = prompt("enter an amount of euro ");

  return euro / 10.61;
};

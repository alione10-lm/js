const prompt = require("prompt-sync")();

// challenge 1
const Multiplication = (num) => {
  num = Number(prompt("enter a number : "));
  for (let ndx = 1; ndx <= 10; ndx++) {
    console.log(` ${num} * ${ndx} => `, num * ndx);
  }
};

// Multiplication();

// challenge 2
const NombrePremier = (num) => {
  num = Number(prompt("enter a number : "));
  let count = 0;

  for (let ndx = 0; ndx <= num; ndx++) {
    if (num % ndx === 0) count++;
  }
  count === 2 ? console.log("premier") : console.log("pas premier");
};

// NombrePremier();

// challenge 3
const sommeMax = (num) => {
  let sum = 0;
  let nums = [];

  while (num !== 0) {
    num = Number(prompt("enter a number : "));
    if (num < 100) {
      nums.push(num);
      sum += num;
    }
  }
  console.log(`sum : ${sum} \nmax : ${Math.max(...nums)}
  `);
};
// sommeMax();

// challenge 4

// challenge 5

const NombresPremiers = () => {
  const num = Number(prompt("Entrez un nombre :"));
  let nums = [];

  for (let i = 2; i <= num; i++) {
    let premier = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        premier = false;
        break;
      }
    }

    if (premier) nums.push(i);
  }

  console.log(nums);
};

// NombresPremiers();

// challenge 6

const Puissance = (base, exposant) => {
  base = Number(prompt("base : "));
  suposant = Number(prompt("suposant : "));

  let count = 0;

  let result = 1;

  while (base > 0 && count <= suposant) {
    result *= base;
    count++;
  }
  console.log(result);
};

// Puissance();

const Somme = (num) => {
  let sum = 0;
  for (let index = 0; index < 10; index++) {
    num = Number(prompt("enter a number : "));

    if (num > 0) {
      sum += num;
    }
  }
  console.log(sum);
};

//Somme();

const Pyramide = (num) => {
  num = parseInt(prompt("enter a number : "));
  let result = "";
  let x = "";
  for (let i = 0; i <= num; i++) {
    for (let j = 0; j <= i; j++) {
      result += "*";
    }
    x += result + `\n`;
  }
  console.log(x);
};
// Pyramide();

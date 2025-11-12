// challenge 1

const prompt = require("prompt-sync")();

const PairOrImpair = (num) => {
  num = Number(prompt("enter a number : "));

  num % 2 === 0 ? console.log("PAIR") : console.log("IMPAIR");
};

// PairOrImpair();

// challenge 2
const NumberType = (num) => {
  num = Number(prompt("enter a number : "));
  isNaN(num) && console.log("nul");
  num >= 0 && console.log("positif");
  num < 0 && console.log("negatif");
};

// NumberType(0);

// challenge 3
const DetectAge = (age) => {
  age = Number(prompt("enter your age :"));

  if (age >= 18) {
    console.log("Éligibldeux e au vote");
  } else {
    console.log("Non éligible");
  }
};

// DetectAge();

// challenge 4

const MaxNumber = (num1, num2) => {
  num1 = Number(prompt("enter a number : "));
  num2 = Number(prompt("enter another one : "));

  if (num1 > num2) {
    console.log("Max : ", num1);
  } else {
    console.log("Max : ", num2);
  }
};
// MaxNumber();

// challenge 5

const DisplayNote = (note) => {
  note = Number(prompt("enter your note : "));
  switch (true) {
    case note <= 100 && note >= 90:
      console.log("A");
      break;
    case note <= 89 && note >= 80:
      console.log("B");
      break;
    case note <= 79 && note >= 70:
      console.log("C");
      break;
    case note <= 69 && note >= 60:
      console.log("D");
      break;

    default:
      console.log("F");
      break;
  }
};
// DisplayNote();

// challenge 6
const Bissextile = (year) => {
  year = prompt("enter a year : ");
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(" bissextile.");
  } else {
    console.log("machi bissextile.");
  }
};

// challenge 7
const Password = (password) => {
  password = prompt("enter a password : ");
  if (
    password.length >= 8 &&
    /\d/.test(password) &&
    /[!@#$%^&*(),.?":{}|<>]/.test(password)
  ) {
    console.log("Fort");
  } else if (password.length >= 6 && /\d/.test(password)) {
    console.log("Moyen");
  } else if (password.length < 6) {
    console.log("Faible");
  }
};

Password();

// challenge 8
const FeuTricolore = (color) => {
  color = prompt("enter ('red' or 'yellow' or 'green') => ");
  switch (color) {
    case "red":
      console.log("arret");
      break;
    case "yellow":
      console.log("preparez-vous");
      break;
    case "green":
      console.log("allez");
      break;

    default:
      console.log("enter a valid color");
      break;
  }
};
// FeuTricolore();

// challenge 9
const FizzBuzz = (num) => {
  num = Number(prompt("enter a number : "));
  if (num % 5 === 0 && num % 3 === 0) {
    console.log("FizzBuzz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(num);
  }
};
// FizzBuzz();

// challenge 10
const VerfiyoLogin = (username, password) => {
  username = prompt("username : ");
  password = prompt("password : ");

  if (username === "admin" && password === "1234") {
    console.log("welcome");
  } else if (username === "admin" && password != "1234") {
    console.log("invalid password !");
  } else {
    console.log("invalid credentials !");
  }
};
// VerfiyoLogin();

const prompt = require("prompt-sync")();

// challenge 1
const Discount = (price, category) => {
  price = Number(prompt("price : "));
  category = prompt("category : ");

  let result = 0;

  if (category === "etudiant") {
    result = price - price * 0.2;
  } else if (category === "senior") {
    result = price - price * 0.3;
  } else if (category === "autre") {
    result = price;
  }
  console.log(result);
};

// Discount();

// challenge 2

const SecretNumber = (num) => {
  const secret = Math.ceil(Math.random() * 9);

  num = Number(prompt("enter a number : "));

  num === secret && console.log("Exact !", secret);
  num < secret && console.log("Trop bas", secret);
  num > secret && console.log("Trop haut", secret);
};
// SecretNumber();

// challenge 3
const AvgValidation = (note1, note2, note3) => {
  note1 = Number(prompt("enter note1 : "));
  note2 = Number(prompt("enter note2 : "));
  note3 = Number(prompt("enter note3 : "));

  const avg = (note1 + note2 + note3) / 3;
  switch (true) {
    case avg >= 16:
      console.log("moyenne : ", avg, "abrivation : Excellent");
      break;
    case avg <= 15 && avg >= 12:
      console.log("moyenne : ", avg, "abrivation : Bien");
      break;
    case avg >= 10 && avg <= 11:
      console.log("moyenne : ", avg, "abrivation : Passable");
      break;
    case avg < 10:
      console.log("moyenne : ", avg, "abrivation : Echech");
      break;

    default:
      break;
  }
};
// AvgValidation();

// challenge 3

const Salaire = (salaire, status) => {
  salaire = parseFloat(prompt("salaire : "));
  status = prompt("status : ").toUpperCase();

  if (status === "CDI") {
    console.log(salaire * (1 - 0.22).toFixed(2));
  } else if (status === "CDD") {
    console.log(salaire * (1 - 0.18).toFixed(2));
  } else if (status === "STAGE") {
    console.log(salaire * (1 - 0.1).toFixed(2));
  } else {
    console.log("introuvable status");
  }
};
// Salaire();

// challenge 4

const validAge = (age, country) => {
  country = prompt("enter country = ").toLocaleLowerCase();
  age = Number(prompt("enter age = "));

  if (country === "france") {
    if (age > 18) {
      console.log("Tu es majeur");
    } else {
      console.log("Tu es mineur");
    }
  } else if (country === "usa") {
    if (age > 21) {
      console.log("Tu es majeur");
    } else {
      console.log("Tu es mineur");
    }
  }
};

// challenge 5

const CalcFrais = () => {
  let montant = parseFloat(prompt("montant : "));
  let pays = prompt('pays ("France" ou "Autre") : ');

  let fraisLivraison = montant >= 50 ? 0 : pays === "France" ? 5 : 10;

  let total = montant + fraisLivraison;

  console.log(` prix total => ${total}€`);
};

// CalcFrais();

// challenge 6
const Evaluation = (note) => {
  note = Number(prompt("Entrez une note entre 0 et 20 :"));

  switch (true) {
    case note > 20 || note < 0:
      console.log("note invalide");
      break;
    case note === 20:
      console.log("Parfait 🎉");
      break;
    case note >= 16:
      console.log("Très bien");
      break;
    case note >= 12:
      console.log("Assez bien");
      break;
    case note >= 10:
      console.log("Peut mieux faire");
      break;
    case note >= 0 && note < 10:
      console.log("Échec");
      break;
  }
};
// Evaluation();

// challenge 7

const Validation = (email, age, nom) => {
  nom = prompt(" votre nom :");
  age = Number(prompt(" votre âge :"));
  email = prompt(" votre email :");

  if (nom !== "" && age >= 13 && email.includes("@")) {
    console.log("Formulaire valide");
  } else {
    console.log("Erreur dans le formulaire");
  }
};

// Validation()

// challenge 8
const Form = (age, permis, vehicule) => {
  let arr = [];
  age = parseInt(prompt("age"));
  permis = prompt("3ndk permis(O/N) : ").toUpperCase() === "O" ? true : false;
  vehicule = prompt("3ndk vehicule (O/N)").toUpperCase() === "O" ? true : false;

  age < 18 && arr.push("age");
  !permis && arr.push("! permis");
  !vehicule && arr.push("! vehicule");

  if (arr.length === 0) {
    console.log("pret a conduire");
  } else {
    console.log(arr.join(","));
  }
};
// Form();

// challenge 9

const ConditionalSort = (num1, num2, num3) => {
  num1 = Number(prompt("enter number : "));
  num2 = Number(prompt("enter number : "));
  num3 = Number(prompt("enter number : "));

  if (num1 !== num2 && num1 !== num3 && num2 !== num3) {
    console.log([num1, num2, num3].sort((a, b) => a - b));
  } else {
    console.log("les nombres doit etre uniques ");
  }
};

// ConditionalSort();

// challenge 10
const securiteSysteme = () => {
  let count = 0;

  while (count < 3) {
    let password = prompt("enter a password : ");
    count++;
    if (password === "secret") {
      console.log("password is correct !");
      break;
    }
  }
  if (count === 3) console.log("acces bloque ");
};
// securiteSysteme();

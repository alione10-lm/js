const prompt = require("prompt-sync")();
// challenge 1
const greeting = () => {
  const name = prompt("enter your name here => ");
  console.log("welcome back", name);
};
// greeting();

// challenge 2
const SumOfTowNumbers = () => {
  const num1 = Number(prompt("enter 1st number : "));
  const num2 = Number(prompt("enter 2nd number : "));

  console.log("the result is :", num1 + num2);
};
// SumOfTowNumbers();

// challenge 3
const addFive = () => {
  const num = Number(prompt("enter a number :"));
  console.log(num + 5);
};
// addFive();

// challenge 4
const isConnected = () => {
  const isConnect = prompt("are you connected (yes / no)! :");

  isConnect === "yes"
    ? console.log("welcome !")
    : console.log("try to connect !");
};
// isConnected();

// challenge 5
const ReplaceFruit = (fruit1, fruit2, fruit3) => {
  fruit1 = prompt("enter fruit 1 : ");
  fruit2 = prompt("enter fruit 2 : ");
  fruit3 = prompt("enter fruit 3 : ");

  console.log(
    "fruits updated : ",
    [fruit1, fruit2, fruit3].join(",").replace(fruit2, "Mange")
  );
};
// ReplaceFruit();

// challenge 6
const Person = () => {
  const user = {
    name: prompt("enter your name : "),
    age: prompt("enter you age : "),
  };

  const newAge = prompt("enter your new age");
  console.log({ ...user, age: newAge });
};
// Person();

// challenge 7
const ScopeTest = () => {
  const message = prompt("enter a message : ");
  console.log(message);
};
// ScopeTest();
// console.log(message); // result  : message is not defined

// challenge 8
const DisplayFullName = () => {
  const fName = prompt("enter your first name : ");
  const ltName = prompt("enter your last name : ");
  console.log(fName + " " + ltName);
};
// DisplayFullName();

// challenge 9
const ArraySum = () => {
  const ArrLenght = Number(prompt("How many numbers do you want to sum ? "));

  let arr = [];
  for (let index = 0; index < ArrLenght; index++) {
    arr = [...arr, Number(prompt(`enter number ${index + 1} : `))];
  }
  console.log(arr.reduce((a, b) => a + b, 0));
};
// ArraySum();

// challenge 10
const status = prompt("entre a global status : ");
const func = (status) => {
  status = prompt("enter a locale status: ");
  console.log(status);
};
// func();
// console.log(status);

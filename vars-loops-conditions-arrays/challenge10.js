const prompt = require("prompt-sync")();

const notes = [];
let result = "";
for (let i = 1; i <= 5; i++) {
  let note = Number(prompt(`enter note ${i} =`));
  notes.push(note);
}

for (let i = 0; i < notes.length - 1; i++) {
  notes[i] > notes[i + 1]
    ? (result = "Régression")
    : notes[i] < notes[i + 1]
    ? (result = "Progression")
    : (result = "Tendance irrégulière");
}

console.log(result);

const prompt = require("prompt-sync")();

let films = [];

for (let ndx = 0; ndx < 3; ndx++) {
  const film = prompt("entrer le nom du film : ");
  const note = Number(prompt("entrer la note du film (entre 0 et 5) : "));

  films.push({
    film,
    note,
  });
}

films.forEach((film) => {
  switch (film.note) {
    case 1 || 0:
      film.commentaire = "À éviter";
      break;
    case 2:
      film.commentaire = "Bof";
      break;
    case 3:
      film.commentaire = "Correct";
      break;
    case 4:
      film.commentaire = "Très bon";
      break;
    case 5:
      film.commentaire = "Chef d'œuvre";
      break;

    default:
      break;
  }
});

films.forEach(({ film, commentaire }) =>
  console.log(`film : ${film} , commentaire : ${commentaire}`)
);

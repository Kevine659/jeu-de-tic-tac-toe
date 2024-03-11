const button = document.querySelectorAll(".choice_button");
const points = document.querySelectorAll(".points")
const resultat = document.querySelector(".descision");
const boutonRejouer = document.querySelector(".rejouer");

let tableau = ["", "", "", "", "", "", "", "", ""];
let joueur1= "X";
let partieTerminee = false;
let point = 0;


// Fonction pour vérifier si un joueur a gagné
function verifierVictoire(joueur) {
  const lignes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Vérifier si l'un des combinaisons gagnantes est remplie par le joueur
  for (let element of lignes) {
    if (
      tableau[element[0]] === joueur &&
      tableau[element[1]] === joueur &&
      tableau[element[2]] === joueur
    ) {
      return true; // Le joueur a gagné
    }
  }

  return false; // Pas de gagnant donc match null
}

// Fonction pour réinitialiser la partie
function reinitialiserPartie() {
    tableau = ["", "", "", "", "", "", "", "", ""];
    joueur1= "X";
    partieTerminee = false;
  }
  // Ajouter des écouteurs d'événements aux cases contenant les boutons de jeux
  button.forEach((cellule, index) => {
    cellule.addEventListener("click", () => {
      jouer(index);
    });
  });
  
  // Ajouter un écouteur d'événement au bouton pour rejouer
  boutonRejouer.addEventListener("click", reinitialiserPartie);
  
  // Définir le joueur initial dans le jeux
  resultat.textContent = "c'est a X de jouer";

// Fonction pour jouer
function jouer(i) {
  // Empêcher de jouer si la case est déjà remplie ou si la partie est terminée
  if (tableau[i] !== "" || partieTerminee) {
    return;
  }

  // Placer le symbole du joueur  dans la case
  tableau[i] = joueur1;

  // Mettre à jour la case dans le HTML
  button[i].textContent = joueur1;

  // Vérifier si le joueur courant a gagné
  if (verifierVictoire(joueur1)) {
    resultat.textContent = `Le joueur ${joueur1} a gagné !`;
    point = point + 1;
    points.textContent = `${point}`
    partieTerminee = true;
    return;
  }

  // Vérifier s'il y a une égalité 
  if (!tableau.includes("")) {
    resultat.textContent = "Match nul !";
    partieTerminee = true;
    return;
  }

  // Passer au joueur suivant
  
  if (joueur1 === "X") {
    joueur1 = "O";
  } else {
    joueur1 = "X";
  }
  
  resultat.textContent = `c'est a ${joueur1} de jouer`;
}



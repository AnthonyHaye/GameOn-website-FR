function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Données du formulaire d'inscription


// Fonction de formatage de la date
// Définition de la fonction formatDate qui prend une date au format ISO en paramètre
function formatDate(date) {
  // Création d'une instance de Date à partir de la chaîne de caractères de la date
  const dateObj = new Date(date);

  // Extraction du jour du mois (au format numérique) et ajout de zéro(s) à gauche si nécessaire pour atteindre une longueur de deux caractères
  const day = String(dateObj.getDate()).padStart(2, '0');

  // Extraction du mois (au format numérique) et ajout de zéro(s) à gauche si nécessaire pour atteindre une longueur de deux caractères
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  // Note : getMonth() retourne les mois de 0 à 11, donc on ajoute 1 pour obtenir le mois actuel

  // Extraction de l'année (au format numérique à quatre chiffres)
  const year = dateObj.getFullYear();

  // Retourne la date formatée en concaténant le jour, le mois et l'année, séparés par des slashs
  return `${day}/${month}/${year}`;
}


// fonction vérifie email

function verifierMail(balise){
  let emailRegExp = new RegExp("[a-z._-]+@[a-z._-]+\\.[a-z._-]+")
  if (emailRegExp.test(balise.value)){
    balise.classList.remove("error")
  } else {
    balise.classList.add("error")
  }
}

// Prévenir le comportement par défaut de submit avec Event

let form = document.querySelector("form")
  form.addEventListener("submit", (Event) => {

    try{
    Event.preventDefault();    

    let prenom1 = document.getElementById("first");
    let first = prenom1.value;
    verifierChamp(prenom1);
    prenom1.addEventListener("change", () => {
    verifierChamp(prenom1)
    })

    let nom1 = document.getElementById("last");
    let last = nom1.value;

    let mail1 = document.getElementById("email");
    let email = mail1.value;
    verifierMail(mail1);

    let anniversaire = document.getElementById("birthdate");
    let birthdate = formatDate(anniversaire.value);

    let quantite = document.getElementById("quantity");
    let quantity = quantite.valueAsNumber;

    let Ville1;
    let listVille = document.querySelectorAll("input[type=radio]");
      for ( let i=0 ; i < listVille.length; i++){
        if (listVille[i].checked) {
        Ville1 = listVille[i].value;
        break;
        }
      }
    

    let read = document.getElementById("checkbox1");
    let checkbox1 = read.checked;

    let nextEven = document.getElementById("checkbox2");
    let checkbox2 = nextEven.checked;

    console.log(first, last, email, birthdate, quantity, Ville1, checkbox1, checkbox2)

      } catch(error){
        console.log("Jean piertre tu es bigleu :" + error.message)
      }
    
});

// Fonction de vérification des champs
function verifierChamp(champ) {
  if (champ.value.trim() === "") {
    throw new Error("Le champ est vide.");
  }
}

function formatDate(date) {
  // Créer une instance de la date à partir de la chaîne de caractères
  const dateObj = new Date(date);

  // Extraire le jour, le mois et l'année de la date
  const day = String(dateObj.getDate()).padStart(2, '0');
  const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Les mois sont indexés à partir de 0, donc on ajoute 1
  const year = dateObj.getFullYear();

  // Retourner la date formatée
  return `${day}/${month}/${year}`;
}

// Exemple d'utilisation
const dateISO = "2024-05-06"; // Date au format ISO
const formattedDate = formatDate(dateISO);
console.log(formattedDate); // Affiche : "06/05/2024"



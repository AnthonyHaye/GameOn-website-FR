// function editNav() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

// // DOM Elements
// const modalbg = document.querySelector(".bground");
// const modalBtn = document.querySelectorAll(".modal-btn");
// const formData = document.querySelectorAll(".formData");

// // launch modal event
// modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// // launch modal form
// function launchModal() {
//   modalbg.style.display = "block";
// }

// // Fonction de formatage de la date
// // Définition de la fonction formatDate qui prend une date au format ISO en paramètre
// function formatDate(date) {
//   const dateObj = new Date(date);
//   const day = String(dateObj.getDate()).padStart(2, '0');
//   const month = String(dateObj.getMonth() + 1).padStart(2, '0');
//   const year = dateObj.getFullYear();
//   return `${day}/${month}/${year}`;
// }


// // function verifierChamp(balise) {
// //   if (balise.value === "") {
// //     balise.classList.add("data-error", "Ce champ est requis.");
// //     balise.classList.add("data-error-visible", "true");
// //   } else {
// //     balise.classList.remove("data-error");
// //     balise.classList.remove("data-error-visible");
// //   }
// // }

// function verifierChamp(balise) {
//   if (balise.value === "") {
//     balise.classList.add("data-error");
//     balise.parentElement.setAttribute("data-error", "Ce champ est requis.");
//     balise.parentElement.setAttribute("data-error-visible", "true");

//   } else {
//     balise.classList.remove("data-error");
//     balise.parentElement.removeAttribute("data-error");
//     balise.parentElement.removeAttribute("data-error-visible");
//     balise.parentElement.classList.remove("formData"); // Retirer la classe formData du parent

//   }
// }




// let form = document.querySelector("form")
// form.addEventListener("submit", (evenement) => {
//   evenement.preventDefault()

//   let prenom1 = document.getElementById("first")
//   // let prenom = prenom1.value


//   let nom1 = document.getElementById("last")
//   verifierChamp(nom1)

//   let mail1 = document.getElementById("email");
//   let email = mail1.value;


//   let anniversaire = document.getElementById("birthdate");
//   let birthdate = formatDate(anniversaire.value);

//   let quantite = document.getElementById("quantity");
//   let quantity = quantite.valueAsNumber;

//   let Ville1;
//   let listVille = document.querySelectorAll("input[type=radio]");
//   for (let i = 0; i < listVille.length; i++) {
//     if (listVille[i].checked) {
//       Ville1 = listVille[i].value;
//       break;
//     }
//   }


//   let read = document.getElementById("checkbox1");
//   let checkbox1 = read.checked;

//   let nextEven = document.getElementById("checkbox2");
//   let checkbox2 = nextEven.checked;

//   console.log(prenom1, nom1, email, birthdate, quantity, Ville1, checkbox1, checkbox2)


// }
// )

// /************************************************************************************************************************************************************** */

//Navigation  querySelector(".la class")

const bground = document.querySelector(".bground")
const bground1 = document.querySelector(".bground1")
const btnSignup = document.querySelectorAll(".btn-signup")
const btnClose = document.querySelector(".btn-close")
const btnNav = document.querySelector('#btnNavbar');

//Formulaire  querySelector("# identifiant")

const form = document.querySelector('form');
const prenom = document.querySelector('#first');
const nom = document.querySelector('#last');
const email = document.querySelector('#email');
const birthday = document.querySelector('#birthdate');
const quantite = document.querySelector('#quantity');
const RadioVille = document.querySelectorAll("input[name='location']");
const conditionsCheckbox = document.querySelector('#checkbox1');
const nextEvenement = document.querySelectorAll('#checkbox2');

// Gestion de la navBar
btnNav.addEventListener('click', () => document.querySelector('.list').classList.toggle('menu_toggle'));


//Gestion popup d'inscription
btnSignup.forEach(btn => { 
  btn.addEventListener('click', () => 
    bground.style.display = "flex") }
);
btnClose.addEventListener('click',() => 
    bground.style.display = "none");


//Les messages d'erreurs

const message = {
  MessPrenom: 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.',
  MessNom: 'Veuillez entrer 2 caractères ou plus pour le champ du nom.',
  MessEmail: 'Veuillez renseigner une adresse mail valide.',
  MessBirthday: 'Vous devez entrer votre date de naissance.',
  MessQuantite: 'Veuillez renseigner un nombre entre 0 et 99',
  MessRadioVille: 'Veuillez sélectionner une ville',
  MessConditions: `Vous devez accepter les conditions d'utilisation`,
};

// Regex Règles de validation

const regexNom = /^([A-Za-z|\s]{2,15})?([-]{0,1})?([A-Za-z|\s]{2,15})$/;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexQuantite = /^([0-9]{1,2})$/;

// customize les erreurs
// affiche le message d'erreur
const setErrorMessage = (element, message) => {
  element.parentElement.setAttribute('data-error-visible', 'true');
  element.parentElement.setAttribute('data-error', message);
}

// cache le message d'erreur
const hideErrorMessage = element => {
  element.parentElement.setAttribute('data-error-visible', '');
  element.parentElement.setAttribute('data-error', '');
}


// *******************************les fonctions*********************
// Vérifie la valeur des entrées

function checkInputValue(regex, element, message) {
  if (!regex.test(element.value)) {
      setErrorMessage(element, message);
      return false;
  } 
  hideErrorMessage(element);
  return true; 
}

// Vérifie si les conditions sont acceptées
function checkIfConditionsAccepted(element, message) {
  if(!element.checked) {
      setErrorMessage(element, message);
      return false;
  } 
  hideErrorMessage(element);
  return true;  
};

// Vérifie si une ville est sélectionné
function checkIfCitySelected(cities, message) {
  const isChecked = Array.from(cities).some(radio => radio.checked);
  if (!isChecked) {
      setErrorMessage(cities[0], message);
      return false;
  };
  hideErrorMessage(cities[0]);
  return true;
};

// Vérifie si la personne à plus de 18 ans
function checkIfUserIsYoungerThan18(element, message) {
  const birthdate = new Date(element.value);
  let difference = Date.now() - birthdate.getTime();
  difference = new Date(difference);
  const userAge = difference.getFullYear() - 1970;

  const currentYear = new Date().getFullYear();
  const birthYear = birthdate.getFullYear();
  
  if (birthYear < currentYear - 100 || birthYear.toString().length !== 4 || userAge < 18) {
      setErrorMessage(element, message);
      return false;
  } 
  hideErrorMessage(element);
  return true;
};

/********************************************************************************************** */

// Vérifie les entrée avec l'écouteur d'évènements
prenom.addEventListener('input', () => checkInputValue(regexNom, prenom, message.MessPrenom)); 
nom.addEventListener('input', () => checkInputValue(regexNom, nom, message.MessNom));
email.addEventListener('input', () => checkInputValue(regexEmail, email, message.MessEmail));
birthday.addEventListener('input', () => checkIfUserIsYoungerThan18(birthday, message.MessBirthday));
quantite.addEventListener('input', () => checkInputValue(regexQuantite, quantite, message.MessQuantite));
RadioVille.forEach(radio => radio.addEventListener('change', () => checkIfCitySelected(RadioVille, message.MessRadioVille)));
conditionsCheckbox.addEventListener('input', () => checkIfConditionsAccepted(conditionsCheckbox, message.MessConditions));


// // Validation du formulaire
// function validate(e) {
//   e.preventDefault();

//   // Vérifie si le formulaire est correctement rempli avec les fonctions
//   const ConditionsOk = checkIfConditionsAccepted(conditionsCheckbox, message.MessConditions);
//   const VilleOk = checkIfCitySelected(RadioVille, message.MessRadioVille);
//   const AgeOk = checkIfUserIsYoungerThan18(birthday, message.MessBirthday);
//   const QuantiteOk = checkInputValue(regexQuantite, quantite, message.MessQuantite);
//   const EmailOk = checkInputValue(regexEmail, email, message.MessEmail);
//   const NomOk = checkInputValue(regexNom, nom , message.MessNom);
//   const PrenomOk = checkInputValue(regexNom, prenom , message.MessPrenom);

//   // Le formulaire est correctement rempli
//   if (PrenomOk && NomOk && EmailOk && QuantiteOk && AgeOk && VilleOk && ConditionsOk) {
//       bground.style.display = 'none';
//       bground1.style.display = 'flex';
//       form.reset();
//   } 
// };


// Validation du formulaire
function validate(e) {
  e.preventDefault();

  try {
    // Vérifie si le formulaire est correctement rempli avec les fonctions
    const ConditionsOk = checkIfConditionsAccepted(conditionsCheckbox, message.MessConditions);
    const VilleOk = checkIfCitySelected(RadioVille, message.MessRadioVille);
    const AgeOk = checkIfUserIsYoungerThan18(birthday, message.MessBirthday);
    const QuantiteOk = checkInputValue(regexQuantite, quantite, message.MessQuantite);
    const EmailOk = checkInputValue(regexEmail, email, message.MessEmail);
    const NomOk = checkInputValue(regexNom, nom , message.MessNom);
    const PrenomOk = checkInputValue(regexNom, prenom , message.MessPrenom);

    // Le formulaire est correctement rempli
    if (PrenomOk && NomOk && EmailOk && QuantiteOk && AgeOk && VilleOk && ConditionsOk) {
      bground.style.display = 'none';
      bground1.style.display = 'flex';
      form.reset();
    } 
  } catch(error) {
    // Gère l'erreur
    console.error('Une erreur s\'est produite lors de la validation du formulaire :', error);
    // Vous pouvez ajouter ici du code pour afficher un message à l'utilisateur ou effectuer d'autres actions en cas d'erreur.
  }
};


// envoie du formulaire
form.addEventListener('submit', e => validate(e));

// Fermeture et retour à l'acceuil
document.querySelector('.bground1_content button').addEventListener('click', () => bground1.style.display = "none");
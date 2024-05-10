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

// Fonction de formatage de la date
// Définition de la fonction formatDate qui prend une date au format ISO en paramètre
function formatDate(date) {
  const dateObj = new Date(date);
  const day = String(dateObj.getDate()).padStart(2, '0');
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const year = dateObj.getFullYear();
  return `${day}/${month}/${year}`;
}


// function verifierChamp(balise) {
//   if (balise.value === "") {
//     balise.classList.add("data-error", "Ce champ est requis.");
//     balise.classList.add("data-error-visible", "true");
//   } else {
//     balise.classList.remove("data-error");
//     balise.classList.remove("data-error-visible");
//   }
// }

function verifierChamp(balise) {
  if (balise.value === "") {
   balise.classList.add("data-error");
    balise.parentElement.setAttribute("data-error", "Ce champ est requis.");
    balise.parentElement.setAttribute("data-error-visible", "true");
   // balise.parentElement.classList.add("formData"); // Ajouter la classe formData au parent

  } else {   
    balise.classList.remove("data-error");
    balise.parentElement.removeAttribute("data-error");    
    balise.parentElement.removeAttribute("data-error-visible");
    balise.parentElement.classList.remove("formData"); // Retirer la classe formData du parent
  
  }
}




let form = document.querySelector("form")
form.addEventListener("submit", (evenement) => {
  evenement.preventDefault()

  let prenom1 = document.getElementById("first")
 // let prenom = prenom1.value
  

  let nom1 = document.getElementById("last")
  //let nom = nom1.value
  verifierChamp(nom1)

  let mail1 = document.getElementById("email");
  let email = mail1.value;


  let anniversaire = document.getElementById("birthdate");
  let birthdate = formatDate(anniversaire.value);

  let quantite = document.getElementById("quantity");
  let quantity = quantite.valueAsNumber;

  let Ville1;
  let listVille = document.querySelectorAll("input[type=radio]");
  for (let i = 0; i < listVille.length; i++) {
    if (listVille[i].checked) {
      Ville1 = listVille[i].value;
      break;
    }
  }


  let read = document.getElementById("checkbox1");
  let checkbox1 = read.checked;

  let nextEven = document.getElementById("checkbox2");
  let checkbox2 = nextEven.checked;

  console.log(prenom1, nom1, email, birthdate, quantity, Ville1, checkbox1, checkbox2)


}
)
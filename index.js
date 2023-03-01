/**  Pas besoin d'installer ou de télécharger l'API Constraint Validation pour l'utiliser.
L'API Constraint Validation est une fonctionnalité intégrée des navigateurs web modernes,
donc vous pouvez l'utiliser directement dans votre code HTML et JavaScript sans avoir à installer quoi que ce soit.
L'API Constraint Validation est activée par défaut pour les éléments de formulaire HTML tels que <input>, <textarea> et <select>.
Pour utiliser cette API, vous devez simplement utiliser les attributs de validation HTML tels que required, min, max, pattern, type, etc.
En utilisant JavaScript, vous pouvez ajouter des écouteurs d'événements pour les événements de validation, tels que invalid, input, change, etc.
et utiliser la méthode setCustomValidity() pour définir des messages d'erreur personnalisés pour les éléments de formulaire
qui ne satisfont pas les contraintes de validation.

En bref, l'API Constraint Validation est une fonctionnalité native des navigateurs modernes et vous pouvez l'utiliser directement
dans votre code HTML et JavaScript. */

/*const emailInput = document.querySelector('#coEmail');

emailInput.addEventListener('invalid', () => {
  emailInput.setCustomValidity('Veuillez entrer une adresse e-mail valide.');
});*/



const postTitleInput = document.getElementById('postTitle');
const postTitleValidation = document.getElementById('postTitle-validation');

postTitleInput.addEventListener('blur', function (event) {
  const isValid = event.target.validity.valid;
  const message = event.target.validationMessage;

  if (message && !isValid) {
    postTitleValidation.innerText = message;
  } else {
    postTitleValidation.innerText = '';
  }
}, true);

const nameInput = document.getElementById('name');
const nameValidation = document.getElementById('name-validation');

nameInput.addEventListener('blur', function (event) {
  const isValid = event.target.validity.valid;
  const message = event.target.validationMessage;

  if (message && !isValid) {
    nameValidation.innerText = message;
  } else {
    nameValidation.innerText = '';
  }
}, true);

const emailInput = document.getElementById('email');
const emailValidation = document.getElementById('email-validation');

emailInput.addEventListener('blur', function (event) {
  const isValid = event.target.validity.valid;
  const message = event.target.validationMessage;

  if (message && !isValid) {
    emailValidation.innerText = message;
  } else {
    emailValidation.innerText = '';
  }
}, true);

const sexeInput = document.getElementById('sexe');
const sexeValidation = document.getElementById('sexe-validation');

sexeInput.addEventListener('blur', function (event) {
  const isValid = event.target.validity.valid;
  const message = event.target.validationMessage;

  if (message && !isValid) {
    sexeValidation.innerText = message;
  } else {
    sexeValidation.innerText = '';
  }
}, true);


const dateInput = document.getElementById('date');
const dateValidation = document.getElementById('date-validation');

function validateDate(event) {
  const isValid = dateInput.validity.valid;
  const message = dateInput.validationMessage;

  if (!isValid) {
    dateValidation.innerText = message;
    event.preventDefault(); // Empêche l'envoi du formulaire si la date n'est pas valide
  } else {
    dateValidation.innerText = '';
  }
}

// Appel de la fonction de validation lors de la soumission du formulaire
const form = document.querySelector('form');
form.addEventListener('submit', validateDate);


const telephoneInput = document.getElementById('telephone');
const telephoneValidation = document.getElementById('telephone-validation');

telephoneInput.addEventListener('blur', function (event) {
  const isValid = event.target.validity.valid;
  const message = event.target.validationMessage;

  if (message && !isValid) {
    telephoneValidation.innerText = message;
  } else {
    telephoneValidation.innerText = '';
  }
}, true);
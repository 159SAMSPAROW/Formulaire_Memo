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

const emailInput = document.querySelector('#coEmail');

emailInput.addEventListener('invalid', () => {
  emailInput.setCustomValidity('Veuillez entrer une adresse e-mail valide.');
});


const postTitleInput = document.getElementById('postTitle');
const connectedValidation = document.getElementById('postTitle-validation');

postTitleInput.addEventListener('blur', function (event) {
  const isValid = event.target.validity.valid;
  const message = event.target.validationMessage;

  if (message && !isValid) {
    connectedValidation.innerText = message;
  } else {
    connectedValidation.innerText = '';
  }
}, true);
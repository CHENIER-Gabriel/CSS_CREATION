document.querySelector('.cercle').style.animationDuration = '5s'; // Par défaut

// Exemple : Changer la vitesse avec JavaScript
function changerVitesse(vitesse) {
  document.querySelector('.cercle').style.animationDuration = `${vitesse}s`;
}

// Appelle changerVitesse(2) pour accélérer, par exemple.
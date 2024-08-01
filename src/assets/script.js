// Activer le bouton de retour en haut de page
let monbouton = document.getElementById("btn-back-to-top");

// Afficher le bouton de retour en haut Lorsque l'utilisateur fait défiler le document de 20 px vers le bas
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    monbouton.style.display = "block";
  } else {
    monbouton.style.display = "none";
  }
}
// Retourner en haut de la page lors du clic sur le bouton
monbouton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
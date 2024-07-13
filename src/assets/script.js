// Sélectionne l'élément avec l'ID "cursor" et le stocke dans la variable cursor
const cursor = document.getElementById("cursor");
// Ajoute un écouteur d'événements pour le mouvement de la souris sur l'élément body du document
document.body.addEventListener("mousemove", function (e) {
  // Déplace l'élément avec l'ID "cursor" à la position de la souris
  (cursor.style.left = e.clientX - 10 + "px"),
    (cursor.style.top = e.clientY - 10 + "px");
});

// Ajoute un écouteur d'événements pour le clic sur le document
document.addEventListener("click", function () {
  cursor.classList.add("bulle");

  setTimeout(function () {
    cursor.classList.remove("bulle");
  }, 500);
});

// Selectionne tous les éléments <a> du document et les stocke dans la variable links
const links = document.querySelectorAll("a");
//console.log("XXXXXXXXXXXXXXXXXx", links);

// Parcours tous les éléments de la liste links et ajoute des écouteurs d'événements mouseover et mouseout
links.forEach((link) => {
  // Ajoute un écouteur d'événements pour le survol de la souris sur chaque élément de la liste links
  link.addEventListener("mouseover", function () {
    //console.log("Mouse over of link");
    cursor.classList.add("cursor-grow");
  });
  // Ajoute un écouteur d'événements pour la sortie de la souris sur chaque élément de la liste links
  link.addEventListener("mouseout", function () {
    //console.log("Mouse over of link");
    cursor.classList.remove("cursor-grow");
  });
});

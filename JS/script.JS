// Gestion de la pop-up pour l'assemblage
document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup-assemblage");
    const closeBtn = document.querySelector(".close-btn");

    // Recherche tous les éléments <h3> dans des éléments ayant la classe .service-item
    let elements = document.querySelectorAll('.service-item h3');

    // Boucle pour trouver le <h3> avec le texte souhaité
    elements.forEach(function(element) {
        if (element.textContent.includes('Assemblage d\'ordinateur')) {
            // Ouvrir la popup lorsque le titre est cliqué
            element.addEventListener('click', function() {
                popup.style.display = 'flex';
            });
        }
    });

    // Fermer la pop-up avec le bouton de fermeture
    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
    });

    // Gestion des boutons "Bureautique" et "Gaming"
    document.getElementById('btn-bureautique').addEventListener('click', function () {
        document.getElementById('bureautique-config').classList.remove('hidden');
        document.getElementById('gaming-config').classList.add('hidden');
    });

    document.getElementById('btn-gaming').addEventListener('click', function () {
        document.getElementById('gaming-config').classList.remove('hidden');
        document.getElementById('bureautique-config').classList.add('hidden');
    });

    // Fermer la pop-up en cliquant en dehors
    window.addEventListener('click', function (e) {
        if (e.target.id === 'popup-assemblage') {
            popup.style.display = 'none';
        }
    });
});
// Sélectionne l'élément avec l'attribut data-service égal à 'Assemblage d'ordinateur'
let element = document.querySelector('.service-item[data-service="Assemblage d\'ordinateur"]');

if (element) {
    console.log('Élément trouvé :', element);
    // Ouvrir la popup
    document.getElementById('popup-assemblage').style.display = 'block';
} 

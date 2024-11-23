document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup-assemblage");
    const closeBtn = document.querySelector(".close-btn");
    const overlay = document.getElementById("popup-overlay");  // Sélectionner l'overlay

    // Ajouter un flag pour éviter d'ouvrir plusieurs popups
    let isPopupOpen = false;

    // Recherche tous les éléments <h3> dans des éléments ayant la classe .service-item
    let elements = document.querySelectorAll('.service-item h3');

    // Boucle pour trouver le <h3> avec le texte souhaité
    elements.forEach(function(element) {
        if (element.textContent.includes('Assemblage d\'ordinateur')) {
            // Ouvrir la popup lorsque le titre est cliqué, mais éviter plusieurs ouvertures
            element.addEventListener('click', function() {
                if (!isPopupOpen) {
                    popup.style.display = 'flex';
                    overlay.style.display = 'flex';  // Afficher l'overlay
                    isPopupOpen = true;  // Marquer la popup comme ouverte
                }
            });
        }
    });

    // Fermer la pop-up avec le bouton de fermeture
    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
        overlay.style.display = "none";  // Cacher l'overlay lorsque la popup est fermée
        isPopupOpen = false;  // Réinitialiser le flag
    });

    // Fermer la pop-up en cliquant en dehors de la fenêtre popup (sur l'overlay)
    window.addEventListener('click', function(e) {
        if (e.target === overlay) {
            popup.style.display = 'none';
            overlay.style.display = 'none';  // Cacher l'overlay lorsque le clic se fait en dehors de la popup
            isPopupOpen = false;  // Réinitialiser le flag
        }
    });
});

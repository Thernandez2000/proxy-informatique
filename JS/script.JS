// Ajout d'un log pour vérifier que le script est bien lancé
console.log("Le script est lancé !");
document.querySelectorAll('.ordinateur-type').forEach(function (type) {
    type.addEventListener('click', function () {
        const typeId = this.id; // Récupère l'id de l'élément cliqué
        console.log(`Type d'ordinateur cliqué : ${typeId}`);  // Vérifier quel type est sélectionné
        const configContainer = document.getElementById('configurations');
        const popup = document.getElementById('popup-config');
        
        // Configuration des PCs selon le type
        let configurationsHTML = '';

        if (typeId === 'bureautique') {
            configurationsHTML = `
                <div class="config">
                    <h4>Configurations par défaut - Ordinateur Bureautique</h4>
                    <ul>
                        <li>Config 1 : Processeur i3, 8Go RAM, SSD 256Go - <strong>500€</strong></li>
                        <li>Config 2 : Processeur i5, 16Go RAM, SSD 512Go - <strong>700€</strong></li>
                        <li>Config 3 : Processeur Ryzen 5, 16Go RAM, SSD 1To - <strong>850€</strong></li>
                    </ul>
                    <div class="message">
                        <p><strong>Pour une configuration personnalisée :</strong></p>
                        <p>Merci de me contacter directement par téléphone au <strong>06.95.21.78.10</strong> ou via le formulaire disponible sur le site.</p>
                        <p><strong>Important :</strong> Tous les paiements pour les commandes se feront à l'avance. Le devis sera envoyé par email ou pourra être récupéré sous format papier dans mon local. Veuillez préciser à l'avance la manière dont vous souhaitez recevoir votre devis. Par défaut, il sera envoyé par email.</p>
                    </div>
                </div>
            `;
        } else if (typeId === 'gaming') {
            configurationsHTML = `
                <div class="config">
                    <h4>Configurations par défaut - PC Gaming</h4>
                    <ul>
                        <li>Config 1 : Processeur i5, GTX 1660, 16Go RAM, SSD 512Go - <strong>1000€</strong></li>
                        <li>Config 2 : Processeur i7, RTX 3060, 32Go RAM, SSD 1To - <strong>1500€</strong></li>
                        <li>Config 3 : Processeur Ryzen 7, RTX 3070, 32Go RAM, SSD 2To - <strong>2000€</strong></li>
                    </ul>
                    <div class="message">
                        <p><strong>Pour une configuration personnalisée :</strong></p>
                        <p>Merci de me contacter directement par téléphone au <strong>06.95.21.78.10</strong> ou via le formulaire disponible sur le site.</p>
                        <p><strong>Important :</strong> Tous les paiements pour les commandes se feront à l'avance. Le devis sera envoyé par email ou pourra être récupéré sous format papier dans mon local. Veuillez préciser à l'avance la manière dont vous souhaitez recevoir votre devis. Par défaut, il sera envoyé par email.</p>
                    </div>
                </div>
            `;
        }
        // Ajoute les configurations dans le conteneur
        configContainer.innerHTML = configurationsHTML;

        // Affiche la popup
        popup.style.display = 'block';  // Afficher la popup

    });
});

document.querySelector('.close-btn').addEventListener('click', function () {
    console.log('Popup fermée');  // Vérifier si le bouton de fermeture est cliqué
    document.getElementById('popup-config').style.display = 'none';
});

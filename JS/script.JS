// Gestion de la pop-up pour l'assemblage
document.querySelector(".service-item h3:contains('Assemblage d\'ordinateur')").addEventListener('click', function () {
    document.getElementById('popup-assemblage').style.display = 'flex';
});

document.querySelector('.close-btn').addEventListener('click', function () {
    document.getElementById('popup-assemblage').style.display = 'none';
});

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
        document.getElementById('popup-assemblage').style.display = 'none';
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup-assemblage");
    const closeBtn = document.querySelector(".close-btn");
    const buttons = document.querySelectorAll(".btn-option");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            popup.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });
});

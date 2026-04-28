// ----------------------------------------------------
// 1. GESTION DU MODE SOMBRE / CLAIR
// ----------------------------------------------------
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Vérifier si l'utilisateur avait déjà choisi un thème lors d'une visite précédente (Local Storage)
if (themeToggleBtn) {
    const themeActuel = localStorage.getItem('theme');
    if (themeActuel === 'sombre') {
        body.classList.add('dark-mode');
        themeToggleBtn.textContent = '☀️';
    }

    // Action au clic sur le bouton
    themeToggleBtn.addEventListener('click', () => {
        // Bascule (ajoute ou retire) la classe 'dark-mode' sur la balise <body>
        body.classList.toggle('dark-mode');
        
        const estSombre = body.classList.contains('dark-mode');
        
        // Met à jour l'icône et sauvegarde le choix
        themeToggleBtn.textContent = estSombre ? '☀️' : '🌙';
        localStorage.setItem('theme', estSombre ? 'sombre' : 'clair');
        
        // Accessibilité : Optionnel, on peut aussi mettre à jour un aria-label ici
    });
}

// ----------------------------------------------------
// 2. GESTION DU MENU BURGER (MOBILE)
// ----------------------------------------------------
const burgerIcon = document.getElementById('burger-icon');
const navMenu = document.getElementById('nav-menu');

if (burgerIcon && navMenu) {
    // Action au clic sur le burger
    burgerIcon.addEventListener('click', () => {
        // Ajoute ou retire la classe 'actif' sur le menu
        const estOuvert = navMenu.classList.toggle('actif');
        
        // Accessibilité : mettre à jour l'état étendu
        burgerIcon.setAttribute('aria-expanded', estOuvert);
    });

    // Fermer le menu mobile quand on clique sur un lien
    const liensMenu = document.querySelectorAll('.nav-liens a');
    liensMenu.forEach(lien => {
        lien.addEventListener('click', () => {
            navMenu.classList.remove('actif');
            burgerIcon.setAttribute('aria-expanded', 'false');
        });
    });
}
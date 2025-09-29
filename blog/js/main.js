import { includeHTML } from './include.js';
import { initMenuToggle } from './menuToggle.js';

// Charger les parties HTML
includeHTML("head", "../include/_header.html");
includeHTML("navigation", "../include/_navigation.html", () => {
   // Initialiser le menu toggle après que la nav est chargée
   initMenuToggle();
});
includeHTML("footer", "../include/_footer.html");

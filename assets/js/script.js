import { initializeMenu, initializePhoneMenu, initializeDropdownMenu } from './navbar.js';
import { setupScrollTop } from './scroll-top.js';
import { setupLoader } from './loader.js';
import { handleErrors, handleResourceErrors } from './error-handler.js';

// Navbar
document.addEventListener("DOMContentLoaded", function () {
    initializeMenu();
    initializePhoneMenu();
    initializeDropdownMenu();

});
// LOADER PAGE
document.addEventListener('DOMContentLoaded', setupLoader);
// SCROLL TOP
document.addEventListener('DOMContentLoaded', setupScrollTop);

// ERROR HANDLER
// Vous souhaiterez peut-être personnaliser cela en fonction de vos besoins
// Par exemple, vous pouvez appeler handleErrors avec un code d'erreur spécifique.
// handleErrors(404);
// handleErrors(500);
// handleErrors(422);
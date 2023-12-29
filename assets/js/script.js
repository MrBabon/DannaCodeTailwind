import { initializeMenu, initializePhoneMenu, initializeDropdownMenu } from './navbar.js';
import { setupLoader } from './loader.js';

// Navbar
document.addEventListener("DOMContentLoaded", function () {
    initializeMenu();
    initializePhoneMenu();
    initializeDropdownMenu();
});
// LOADER PAGE
document.addEventListener('DOMContentLoaded', setupLoader);
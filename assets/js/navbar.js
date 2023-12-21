export function initializeMenu() {
    const menuElementsToToggle = document.querySelectorAll(".toggle-menu");
    const iconeToggle = document.querySelector(".icone-toggle");
    const logoButton = document.querySelector(".icone-toggle img");

    let menuVisible = false;

    const toggleMenu = () => {
        menuElementsToToggle.forEach(el => el.classList.toggle('hidden', menuVisible));

        // Inverser l'état du menu
        menuVisible = !menuVisible;
        // Changer le logo en conséquence
        if (menuVisible) {
            // Changer vers le logo de fermeture du menu
            logoButton.src = "../assets/images/icon/x-lg.svg";
        } else {
            // Changer vers le logo par défaut
            logoButton.src = "../assets/images/icon/menu.svg";
        }
    };

    iconeToggle.addEventListener('click', toggleMenu);
}

export function initializeDropdownMenu() {
    const menuButton = document.getElementById('menu-button');
    const dropdownMenu = document.querySelector('.absolute');
    const logoContact = document.querySelector("#menu-button svg")

    menuButton.addEventListener('click', function () {
        const isOpen = dropdownMenu.classList.contains('hidden');

        // Basculer la visibilité du menu
        if (isOpen) {
            dropdownMenu.classList.remove('hidden', 'transition', 'ease-out', 'duration-300');
            logoContact.classList.add('rotate-180');
        } else {
            logoContact.classList.remove('rotate-180');
            dropdownMenu.classList.add('transition', 'ease-out', 'duration-300', 'hidden');
        }
    });
}

export function initializePhoneMenu() {
    const menuButton = document.getElementById('menu-button-phone');
    const disclosureMenu = document.getElementById('disclosure-1');
    const logoContact = document.querySelector("#menu-button-phone svg")

    menuButton.addEventListener('click', function () {
        const isOpen = disclosureMenu.classList.contains('hidden');

        // Basculer la visibilité du menu
        if (isOpen) {
            disclosureMenu.classList.remove('hidden', 'transition', 'ease-out', 'duration-300');
            logoContact.classList.add('rotate-180');
        } else {
            logoContact.classList.remove('rotate-180');
            disclosureMenu.classList.add('transition', 'ease-out', 'duration-300', 'hidden');
        }
    });
}
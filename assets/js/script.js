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
            logoButton.src = "assets/images/x-lg.svg";
        } else {
            // Changer vers le logo par défaut
            logoButton.src = "assets/images/menu.svg";
        }
    };

    iconeToggle.addEventListener('click', toggleMenu);
export function handleErrors(errorCode) {
    // Déterminez quelle page d'erreur afficher en fonction du code d'erreur
    let errorPage;
    switch (errorCode) {
        case 404:
            errorPage = "/DannaCodeTailwind/public/404.html";
            break;
        case 422:
            errorPage = "/DannaCodeTailwind/public/422.html";
            break;
        case 500:
            errorPage = "/DannaCodeTailwind/public/500.html";
            break;
        default:
            errorPage = "/DannaCodeTailwind/public/404.html"; // Page par défaut pour les erreurs inconnues
    }

    // Redirigez l'utilisateur vers la page d'erreur
    window.location.href = errorPage;
}

export function handleResourceErrors(event) {
    const elementType = event.target.tagName.toLowerCase();
    const srcAttribute = event.target.src || event.target.href;

    console.error(`Erreur de chargement de la ressource (${elementType}): ${srcAttribute}`);

    // Redirigez l'utilisateur vers la page d'erreur appropriée
    handleErrors(404); // ou une autre logique en fonction de votre besoin
}

// Écouteurs d'événements pour les erreurs de chargement de ressources
window.addEventListener('error', handleResourceErrors, true);

// Capturer les erreurs JavaScript
window.onerror = function (msg, url, line, col, error) {
    handleErrors(500); // Redirige vers la page d'erreur 500 en cas d'erreur JavaScript
    return false;
};

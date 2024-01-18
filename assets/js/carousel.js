export function initializeCarousel() {
    const wrapper = document.querySelector('.swiper-wrapper');
    const slideWidth = document.querySelector('.swiper-slide').offsetWidth; // Largeur d'une diapositive

    const slides = Array.from(document.querySelectorAll('.swiper-slide'));
    slides.forEach((slide, index) => {
       const clone = slide.cloneNode(true);
       wrapper.appendChild(clone);
    });
 
    let currentPosition = 0;
 
    function moveCarousel() {
       currentPosition -= slideWidth;
       wrapper.style.transition = 'transform 0.5s ease-in-out';
       wrapper.style.transform = `translateX(${currentPosition}px)`;
 
       // Réinitialiser la position sans interruption lorsqu'on atteint la fin du carousel
       if (currentPosition <= -wrapper.scrollWidth + wrapper.offsetWidth) {
          currentPosition = 0;
          setTimeout(() => {
             wrapper.style.transition = 'none';
             wrapper.style.transform = `translateX(${currentPosition}px)`;
             setTimeout(() => {
                wrapper.style.transition = 'transform 0.5s ease-in-out';
             });
          }, 500); // 500ms correspond à la durée de transition, ajustez si nécessaire
       }
    }

    // Déplacez le carousel continuellement
    setInterval(moveCarousel, 2500); // 2500 ms pour permettre un mouvement continu
}

 
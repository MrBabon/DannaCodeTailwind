// export function initializeCarousel() {
//    const wrapper = document.querySelector('.swiper-wrapper');
//    const slideWidth = document.querySelector('.swiper-slide').offsetWidth;

//    let currentPosition = 0;

//    function moveCarousel() {
//        currentPosition -= 1; // Ajustez la valeur de déplacement selon votre préférence

//        // Appliquer la transition avec une valeur de translation
//        wrapper.style.transition = 'transform 0.02s linear'; // Ajustez la durée de la transition selon votre préférence
//        wrapper.style.transform = `translateX(${currentPosition}px)`;

//        // Réinitialiser la position sans interruption lorsqu'on atteint la fin du carousel
//        if (currentPosition <= -slideWidth) {
//            currentPosition = 0;
//            const firstElement = wrapper.firstElementChild.cloneNode(true);
//            wrapper.appendChild(firstElement);
//            currentPosition += slideWidth;
//            // Retirez la transition après un court délai
//            setTimeout(() => {
//                wrapper.style.transition = 'transform 0s linear';
//                wrapper.style.transform = `translateX(${currentPosition}px)`;
//                wrapper.removeChild(wrapper.firstElementChild);

//                setTimeout(() => {
//                    wrapper.style.transition = 'transform 0.02s linear';
//                });
//            }, 20); // Correspond à la durée de la transition CSS
//        }
//    }

//    // Déplacez le carousel continuellement
//    setInterval(moveCarousel, 20); // Ajustez l'intervalle selon votre préférence
// }

export function initializeCarousel() {
   const wrapper = document.querySelector('.swiper-wrapper');
   const slideWidth = document.querySelector('.swiper-slide').offsetWidth;

   // Ajouter deux copies supplémentaires de chaque diapositive
   const slides = Array.from(document.querySelectorAll('.swiper-slide'));
   for (let i = 0; i < 7; i++) {
       slides.forEach((slide) => {
           const clone = slide.cloneNode(true);
           wrapper.appendChild(clone);
       });
   }

   let currentPosition = 0;

   function moveCarousel() {
       currentPosition -= 1; // Ajustez la valeur de déplacement selon votre préférence

       // Appliquer la transition avec une valeur de translation
       wrapper.style.transition = 'transform 0.02s linear'; // Ajustez la durée de la transition selon votre préférence
       wrapper.style.transform = `translateX(${currentPosition}px)`;

       // Réinitialiser la position sans interruption lorsqu'on atteint la fin du carousel
       if (currentPosition <= -slideWidth * 30) {
         currentPosition = 0;
     
         // Retirez la transition pour éviter le saut
         wrapper.style.transition = 'none';
     
         // Réajuster la position sans saut
         wrapper.style.transform = `translateX(${currentPosition}px)`;
     
         // Rétablir la transition normale
         wrapper.style.transition = 'transform 0.02s linear';
     }
     
   }

   // Déplacez le carousel continuellement
   setInterval(moveCarousel, 20); // Ajustez l'intervalle selon votre préférence
}


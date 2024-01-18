// MOT BANNER //
document.addEventListener("DOMContentLoaded", function() {
    var dynamicWord = document.getElementById("dynamic-word");
    var words = ["voie", "réussite", "avenir"];
    var index = 0;

    function changeWord() {
        dynamicWord.classList.add("animate-slide-out");
        setTimeout(function() {
            dynamicWord.innerHTML = words[index];
            dynamicWord.classList.remove("animate-slide-out");
            dynamicWord.classList.add("animate-slide-in");

            index++;
            if (index === words.length) {
                index = 0;
            }
        }, 800);
    }
setInterval(changeWord, 4000);
});
// MOT PRESTATION //
document.addEventListener("DOMContentLoaded", function() {
    var dynamicPrestation = document.getElementById("dynamic-prestation");
    var words = ["Maintenance", "Référencement", "Conception Web"];
    var index = 0;

    function changeWord() {
        dynamicPrestation.classList.add("animate-slide-prestation-out");
        setTimeout(function() {
            dynamicPrestation.innerHTML = words[index];
            dynamicPrestation.classList.remove("animate-slide-prestation-out");
            dynamicPrestation.classList.add("animate-slide-prestation-in");

            index++;
            if (index === words.length) {
                index = 0;
            }
        }, 800);
    }
setInterval(changeWord, 4000);
});

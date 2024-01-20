//add class "active" to anchors from header
document.addEventListener("DOMContentLoaded", function() {
    var myLinks = document.getElementsByClassName("links");

    if (myLinks.length > 0) {
        for (var i = 0; i < myLinks.length; i++) {
            myLinks[i].addEventListener("click", function(event) {
                event.preventDefault();

                if (this.classList.contains("active")) {
                    return; // Nu face nimic dacă deja are clasa "active"
                }
                
                // Șterge clasa "active" de pe toate link-urile
                for (var j = 0; j < myLinks.length; j++) {
                    myLinks[j].classList.remove("active");
                }

                // Adaugă clasa "active" doar pe link-ul apăsat
                this.classList.add("active");

                console.log("Link apăsat!");
            });
        }
    } else {
        console.error("Niciun element cu clasa 'links' nu a fost găsit.");
    }
});


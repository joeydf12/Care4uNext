document.addEventListener("DOMContentLoaded", () => {
    function close() {
        console.log("close");

        var menu = document.getElementById("curtainMenu");
        menu.style.transform = "translateX(100%)"; // Verberg het menu door het naar rechts te schuiven


    }


    const closeButton = document.getElementById("menuClose");

    closeButton.addEventListener("click", close);
});


function toggleMenu() {
    var menu = document.getElementById("curtainMenu");
    if (menu.style.transform === "translateX(100%)") {
        menu.style.transform = "translateX(0)";
    } else {
        menu.style.transform = "translateX(100%)";
    }
}

function toggleLeesMeer(productNummer) {
    var dots = document.getElementById("dots" + productNummer);
    var moreText = document.getElementById("more" + productNummer);
    var btnText = document.getElementById("myBtn" + productNummer);
    var productBlok = document.querySelector(".productblok" + productNummer);

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "block";  // Toon de verborgen tekst
        dots.style.display = "none";  // Verberg de puntjes
        btnText.textContent = "Lees minder";
        productBlok.classList.add("show-more");
    } else {
        moreText.style.display = "none";  // Verberg de tekst
        dots.style.display = "inline";  // Toon de puntjes
        btnText.textContent = "Lees meer";
        productBlok.classList.remove("show-more");
    }
}



// Controleer of het script correct wordt geladen
console.log("Script geladen: toggleLeesMeer is beschikbaar.");

document.addEventListener("DOMContentLoaded", () => {
    const modals = document.querySelectorAll(".modal");

    // Zoek alle knoppen die een modal moeten openen
    const openModalBtns = document.querySelectorAll("[class^='open-modal']");

    openModalBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const modalNumber = btn.classList[0].replace("open-modal", ""); // Haalt alleen het cijfer op
            const modal = document.getElementById(`popup${modalNumber}`);
            if (modal) modal.style.display = "block";
        });
    });

    // Zoek alle sluitknoppen en voeg event listener toe
    const closeModalBtns = document.querySelectorAll("[class^='close']");
    closeModalBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            btn.closest(".modal").style.display = "none";
        });
    });

    // Sluit modal als je buiten de modal-content klikt
    window.addEventListener("click", (event) => {
        modals.forEach((modal) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});

function scrolnabeneden() {
    window.scrollTo({
        top: 750,
        behavior: "smooth",
    });
}

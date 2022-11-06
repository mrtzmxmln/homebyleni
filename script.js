let isNav = false;
const navBar = document.querySelector("#navBar");
const navBurger = document.querySelector(".navBurger");

function openHome() {
    window.location.replace("./index.html");
}

function openAbout() {
    window.location.replace("./index.html");
}

function openAboutMyHome() {
    window.open("https://www.instagram.com/stories/highlights/18321466900040779/");
}

function openContact() {
    window.location.replace("./contact.html");
}

function openImpressum() {
    window.location.replace("./impressum.html");
}

function openDatenschutz() {
    window.location.replace("./datenschutz.html");
}

function openMail() {
    window.open("mailto:homebyleni@gmx.de?subject=kontakt - home by leni");
}

function openInstagram() {
    window.open("https://instagram.com/homebyleni");
}

function clickBurger() {

    if(isNav != true) {
        
        navBar.classList.toggle('open');
        isNav = true;

    } else if(isNav == true) {

        navBar.classList.toggle('open');
        isNav = false;

    }
    
    /* navBurger.classList.toggle('open'); */
}
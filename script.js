let isNav = false;
const navBar = document.querySelector("#navBar");
const navBurger = document.querySelector(".navBurger");

function openHome() {
    window.location = "./index.html";
}

function openAbout() {
    window.location = "./index.html";
}

function openRoomtour() {
    window.open("https://www.instagram.com/stories/highlights/18321466900040779/");
}

function openContact() {
    window.location = "./contact.html";
}

function openImpressum() {
    window.open("https://homebyleni.de/contact.html#impressum");
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
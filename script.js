let isNav = false;
const navBar = document.querySelector("#navBar");
const navBurger = document.querySelector(".navBurger");

function openHome() {
    window.open("https://homebyleni.de", "_self")
}

function openAbout() {
    window.open("https://homebyleni.de", "_self");
}

function openAboutMyHome() {
    window.open("https://www.instagram.com/stories/highlights/18321466900040779/");
}

function openContact() {
    window.open("https://homebyleni.de/contact.html", "_self");
}

function openImpressum() {
    window.open("https://homebyleni.de/impressum.html", "_self");
}

function openDatenschutz() {
    window.open("https://homebyleni.de/datenschutz.html", "_self");
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


function loadCheck(){
    var loader = document.getElementById("Loader");
    setTimeout(function(){
        loader.classList.add("loadingScreenHide");
        setTimeout(function(){
            loader.classList.add("loadingScreenOff");
        }, 2000);
    }, 2000)   
}
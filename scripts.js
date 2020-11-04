//SHOW N HIDE FUNCTION
function showHide(id){
    element = document.getElementById(id);
    if (element.classList.contains("hide")) {
        element.classList.remove("hide");
    }

    else {
        element.classList.add("hide");
    }
}

// BOOKING OPEN CLOSE
document.getElementById("bookingButton").addEventListener("click", () => showHide("bookingModal") + showHide("menuOpacityLayer") + showHide("menuOpacityLayer2"));
document.getElementById("bookingClose").addEventListener("click", () => showHide("bookingModal") + showHide("menuOpacityLayer") + showHide("menuOpacityLayer2"));
// MENU OPEN/CLOSE
document.querySelectorAll(".siteNavLink")[2].addEventListener("click", () => showHide("menuModal") + showHide("menuOpacityLayer") + showHide("menuOpacityLayer2"));
document.getElementById("menuClose").addEventListener("click", () => showHide("menuModal") + showHide("menuOpacityLayer") + showHide("menuOpacityLayer2"));



// MENU ITEM SWITCHER
document.querySelectorAll(".menuNavLink").forEach(item => { 
    item.addEventListener("click", () => {
        document.querySelectorAll(".menuContainer").forEach(item2 => {
            item2.classList.add("hide");
            item.classList.add
        })
    })
});

document.querySelectorAll(".menuNavLink")[0].addEventListener("click", () => showHide("menuBurgers"));
document.querySelectorAll(".menuNavLink")[1].addEventListener("click", () => showHide("menuSides"));
document.querySelectorAll(".menuNavLink")[2].addEventListener("click", () => showHide("menuDrinks"));

// NAV LINK DECORATION SWITCHER
document.querySelectorAll(".siteNavLink").forEach(item => { 
    item.addEventListener("click", () => {
        document.querySelectorAll(".siteNavLink").forEach(item2 => {
            item2.classList.remove("decorationOn");
        })
    })
});

document.querySelectorAll(".siteNavLink")[0].addEventListener("click", () => document.querySelectorAll(".siteNavLink")[0].classList.add("decorationOn"));
document.querySelectorAll(".siteNavLink")[1].addEventListener("click", () => document.querySelectorAll(".siteNavLink")[1].classList.add("decorationOn"));
document.querySelectorAll(".siteNavLink")[2].addEventListener("click", () => document.querySelectorAll(".siteNavLink")[2].classList.add("decorationOn"));
document.querySelectorAll(".siteNavLink")[3].addEventListener("click", () => document.querySelectorAll(".siteNavLink")[3].classList.add("decorationOn"));
document.querySelector(".fa-window-close").addEventListener("click", () => document.querySelectorAll(".siteNavLink")[2].classList.remove("decorationOn") + document.querySelectorAll(".siteNavLink")[0].classList.add("decorationOn"));

// MENU NAV LINK SWITCHER
document.querySelectorAll(".menuNavLink").forEach(item => { 
    item.addEventListener("click", () => {
        document.querySelectorAll(".menuNavLink").forEach(item2 => {
            item2.classList.remove("decorationOn");
        })
    })
});

document.querySelectorAll(".menuNavLink")[0].addEventListener("click", () => document.querySelectorAll(".menuNavLink")[0].classList.add("decorationOn"));
document.querySelectorAll(".menuNavLink")[1].addEventListener("click", () => document.querySelectorAll(".menuNavLink")[1].classList.add("decorationOn"));
document.querySelectorAll(".menuNavLink")[2].addEventListener("click", () => document.querySelectorAll(".menuNavLink")[2].classList.add("decorationOn"));

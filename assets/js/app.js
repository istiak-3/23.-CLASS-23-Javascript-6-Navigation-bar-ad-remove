let mobileMenu = document.querySelector(".mobile-menu");

let mobileMenuIcon = document.querySelector(".mobile-menu_icon");

let mobileMenuCrossIcon = document.querySelector(".cross-icon");

let body = document.body;

mobileMenuIcon.addEventListener('click', function () {
    mobileMenu.classList.add('active');
});

mobileMenuCrossIcon.addEventListener('click', function () {
    mobileMenu.classList.remove('active');
});

window.addEventListener('click', function (e) {

    if (!mobileMenu.contains(e.target) && !mobileMenuIcon.contains(e.target)) {
        mobileMenu.classList.remove('active');
    }
});


let converted = Array.from(document.querySelectorAll(".mobile-bar_ul a"));


function remove() {
    mobileMenu.classList.remove('active');
}

converted.map((ancor) => {
    ancor.addEventListener('click', remove)
});
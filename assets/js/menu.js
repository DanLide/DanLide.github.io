const button = document.getElementById("navbarBtn");
const menu = document.getElementById("smallMenu");
const menuList = document.getElementById("menuList");

button.addEventListener('click', event => {
    if (button.className === "navbar-toggle-btn") {
        button.className += " active";
        menuList.className += " menu-list-opened";

        menu.style.height = "100%";
        menu.style.width = "100%";
    } else {
        menu.style.height = "0";
        menu.style.width = "0";

        button.className = "navbar-toggle-btn";
        menuList.className = " menu-list";
    }
});
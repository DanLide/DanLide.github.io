const button = document.getElementById("navbarBtn");

button.addEventListener('click', event => {
    if (button.className === "navbar-toggle-btn") {
        button.className += " active"
        document.getElementById("smallMenu").style.height = "100%";
        document.getElementById("smallMenu").style.width = "100%";
    } else {
        document.getElementById("smallMenu").style.height = "0";
        document.getElementById("smallMenu").style.width = "0";
        button.className = "navbar-toggle-btn"
    }
  });
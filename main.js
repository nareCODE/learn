let themeToggle = document.getElementById("themeToggle");
updateThemeToggle(theme);


themeToggle.addEventListener("click", function() {

    let currentTheme = localStorage.getItem("theme") || "clair";
    console.log('Boutton clicked');

    // Toggle le thème
    if (currentTheme === "clair") {
        currentTheme = "sombre";
    } else {
        currentTheme = "clair";
    }

    // Mettre à jour le thème dans le localStorage
    localStorage.setItem("theme", currentTheme);

    // Appliquer le nouveau thème
    appliquerTheme(currentTheme);

    // Mettre à jour l'image du bouton
    updateThemeToggle(currentTheme);
});

function appliquerTheme(themeChoisi) { 
    document.body.style.backgroundColor = themeChoisi === "clair" ? "#15889c" : "black";
    document.body.style.color = themeChoisi === "clair" ? "#15889c" : "black";
}

function updateThemeToggle(theme) {
    if (theme === "clair") {
        themeToggle.style.backgroundImage = "url('images/btndark.png')";
    } else {
        themeToggle.style.backgroundImage = "url('images/btnlight.png')";
    }
}
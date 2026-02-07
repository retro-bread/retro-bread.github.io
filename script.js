const home = document.getElementById("home");
const projects = document.getElementById("projects");
const social = document.getElementById("social");

projects.style.display = "none";
social.style.display = "none";


function show_home() {
    home.style.display = "flex";
    projects.style.display = "none";
    social.style.display = "none";
}

function show_projects() {
    home.style.display = "none";
    projects.style.display = "flex";
    social.style.display = "none";
}

function show_social() {
    home.style.display = "none";
    projects.style.display = "none";
    social.style.display = "flex";
}
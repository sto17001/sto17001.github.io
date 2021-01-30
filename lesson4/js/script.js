let b = new Date();
let year = b.getFullYear();
document.getElementById("currentyear").textContent = year;

let d = new Date(document.lastModified);
document.getElementById("lastupdate").textContent = d;

function toggleMenu(){
    document.getElementById("nav-menu").classList.toggle("hide");
  }
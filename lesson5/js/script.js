let b = new Date();
let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById("date").innerHTML = day[b.getDay()] + ", " + 
b.getDate() + " " + month[b.getMonth()] + " " + b.getFullYear();

function toggleMenu(){
    document.getElementById("nav-menu").classList.toggle("hide");
  }
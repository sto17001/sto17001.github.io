let b = new Date();
let year = b.getFullYear();
document.getElementById("currentyear").textContent = year;

let d = new Date(document.lastModified);
document.getElementById("lastupdate").textContent = d;

WebFont.load({
    google: {
      families: [
         'fontfamilynameofyourchoice'
      ]
    }
  });
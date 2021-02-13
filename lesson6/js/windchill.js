let temp = parseFloat(document.getElementById("highTemp").textContent);
let speed = parseFloat(document.getElementById("windSpeed").textContent);
let result = windChill(temp, speed)

 
document.getElementById("windChillOutput").innerHTML = result;



function windChill(t, s) {
let compute = 35.74 + (0.6215 * t) - 35.75 * Math.pow(s, 0.16) + (0.4275 * t * Math.pow(s, 0.16));
let total = Math.round(compute);
return total; 
}
var json = require('./json/horarios.json');

json = JSON.parse(json);

document.getElementById("text").textContent = json;

var name = prompt("Hva heter du?");
var dagen = prompt(name + ", hvordan har dagen din vært?");
var middag = prompt("Hva har du spist til middag?");
var farge = prompt("Hvilken farge prøvde du på toalettet?");
var leggetid = prompt("når skal du legge deg?");

var message = "<h1>Hei " + name + "!</h1>";
message += "<p>Dagen din har vært " + dagen + "!</p>";
message += "<p>Du spiste " + middag + " til middag, og har prøvd å male toalettet " + farge + "tt.</p>";
message += "<p>Du skal legge deg " + leggetid + ", og kjæresten din skal sende deg en hyggelig nattamelding!</p>";

document.write(message);

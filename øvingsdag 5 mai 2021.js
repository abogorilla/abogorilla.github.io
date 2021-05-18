//Oppgave 1
var antallFrukt = 3
var antallGrønnsaker = 2
var antallVarer = antallFrukt + antallGrønnsaker
document.write(antallVarer);

//Oppgave 2
function calculateMoms () {
    var moms = prompt("Skriv inn eit tall !");
    eksMoms = Number(eksMoms);
    var inkMoms = eksMoms * 1.25;

    alert("Pris inkl moms :") + inkMoms.toFixed(2);
}


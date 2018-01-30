alert("siema")
var podstawa = prompt("Wpisz podstawe trójkąta")
var wysokość = prompt("Wpisz wysokość trójkąta")

podstawa = parseFloat(podstawa);
wysokość = parseFloat(wysokość);

console.log(typeof(podstawa));

var pole = podstawa * wysokość / 2;

console.log(pole);

document.write("Podstawa wynosi: " + podstawa  + "cm" + "<br>")
document.write("Wysokość wynosi: " + wysokość  + "cm" + "<br>")

document.write("Pole wynosi: " + pole  + "cm<sup>2</sup>" + "<br>")

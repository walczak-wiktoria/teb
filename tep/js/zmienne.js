var imie;
imie ="Janusz";
var nazwisko = "Kowal";
document.write("Imię: " + imie + "<br>");
document.write("Nazwisko: ");
document.write(nazwisko + "<br>");
// + to jest konkatenacja
var wiek = "16";
if(wiek>=18){
    document.write("Jesteś pełnoletni<br>");
} else if(wiek<15){
    document.write("Jesteś dzieckiem<br>");
} else {
    document.write("Nie jesteś pełnoletni<br>");
}

var x,y;
x = 10;
y = 5;
var suma = x + y;
var roznica = x - y;
var dzielenie;
dzielenie = x/y;
var mnozenie = x * y;
var modulo = x % y;
console.log(modulo);

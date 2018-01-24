var a = 10, b = "5a";
var wynik = a + b;
//alert(wynik)
//alert(a + b);
console.log("tekst");
console.log(a); //10
console.log(typeof(a)); //number
console.log(typeof(b)); //string
console.log(typeof(wynik)); //string

console.trace(); //fn funkcja = metoda

var _zmienna1 = 10;
// var 3liczba =  3; // błędna nazwa zmiennej

var zmiennaZmiennoprzecinkowa = 2.5; // nie moze byc 2,5
console.log(zmiennaZmiennoprzecinkowa); //2.5
console.log(typeof(zmiennaZmiennoprzecinkowa)); //number

//bool

var prawda = true;
console.log(typeof(prawda)) //boolean

//string

var tekst = "Janusz";
console.log(typeof(tekst)); //string

//undefined

var inna;
console.log(inna); //undefined
console.log(typeof(inna)); //undefined

//object

var tab = ["red", "black"];
console.log(tab); //wyswietla cala tabele w konsoli, numerowanie amerykaniskie(od 0)
console.log(typeof(tab)); //object


//########################################################################################

//var liczba = prompt("Wpisz liczbę")
var liczba1 = prompt("Wpisz liczbę", "liczba 1")
var liczba2 = prompt("Wpisz liczbę", "liczba 2")
var suma = liczba1 + liczba2; //konkatenacja łączenie dwoch stringow lub stringu i liczby
console.log(suma)

//konwersja na typ calkowity
//liczba1 = parseInt(liczba1);
//liczba2 = parseInt(liczba2);

var suma1 = liczba1 + liczba2;

console.log("Po konwersji typów:" + suma1)
console.log(typeof(liczba1)); //number
console.log(typeof(liczba2));

//konwersja na tym zmiennoprzecinkowy

liczba1 = parseFloat(liczba1);
liczba1 = parseFloat(liczba1);

//zad1
/*Użytkownik podaje z klawiatury długość boku kwadratu, wyświetl na ekranie w formacie: "Długość boku wynosi: ... cm" "Pole kwadratu wynosi: ... cm2"*/


var sumaBokow = liczba1 * 2 + liczba2 * 2;
var poleKw = liczba1 * liczba2;
document.write("Długość boku a: " + liczba1 + "<br>")
document.write("Długość boku b: " + liczba2 + "<br><br>")
document.write("Suma boków: " + sumaBokow + "cm" + "<br>")
document.write("Pole kwadratu: " + poleKw + "cm<sup>2<sup>")


//zadanie domowe napisac program obliczajacy pole trojkatu

var liczba3 = prompt("Wpisz podstawę trójkątu")
var liczba4 = prompt("Wpisz wysokość trójkątu")
document.write("a=" + liczba3 + "<br>")
document.write(liczba4 + "<br>")

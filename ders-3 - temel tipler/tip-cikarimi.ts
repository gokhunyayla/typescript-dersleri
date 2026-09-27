// Tip çıkarımı: değeri verdiğimiz anda TypeScript tipi kendisi belirler.

let sehir = "Bursa"; // string
let plaka = 16; // number
let buyuksehir = true; // boolean

// Değer vermeden tanımlıyorsak tipi kendimiz yazarız.
let sicaklik: number;
sicaklik = 24;

console.log(sehir.toUpperCase(), plaka, buyuksehir, sicaklik);

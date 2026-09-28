let urunAdi = "Kablosuz Kulaklık";
let fiyat = 1499.9;
let stokta = true;
let kargoUcreti: number;

fiyat = 1299.9;
urunAdi = urunAdi.toUpperCase();
kargoUcreti = 49.9;

document.body.append(`${urunAdi}: ${fiyat} TL`);

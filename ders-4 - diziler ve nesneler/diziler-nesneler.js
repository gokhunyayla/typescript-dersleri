"use strict";
let urunler = ["Kulaklık", "Klavye", "Mouse"];
urunler.push("Monitör");
let urun = {
    ad: "Kablosuz Kulaklık",
    fiyat: 1499.9,
    stokta: true,
};
urun.fiyat = 1299.9;
urun = {
    ad: "Mekanik Klavye",
    fiyat: 2499.9,
    stokta: false,
};
document.body.append(`${urun.ad}: ${urun.fiyat} TL`);

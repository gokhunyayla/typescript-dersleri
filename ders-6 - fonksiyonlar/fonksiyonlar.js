"use strict";
function toplamFiyat(fiyat, adet = 1) {
    return fiyat * adet;
}
function yazdir(mesaj) {
    document.body.append(mesaj);
}
function enPahali() {
    return ["Kulaklık", 1499.9];
}
let [ad, fiyat] = enPahali();
yazdir(`En pahalı ürün: ${ad}, ${toplamFiyat(fiyat, 2)} TL`);

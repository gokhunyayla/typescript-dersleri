"use strict";
let kulaklik = {
    ad: "Kulaklık",
    fiyat: 1499.9,
};
let kitap = {
    ad: "E-Kitap",
    fiyat: 249.9,
    boyutMB: 12,
};
document.body.append(`${kulaklik.ad}: ${kulaklik.fiyat} TL`);
document.body.append(` · ${kitap.ad}: ${kitap.fiyat} TL`);

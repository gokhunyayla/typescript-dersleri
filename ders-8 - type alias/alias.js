"use strict";
let kulaklik = {
    ad: "Kulaklık",
    fiyat: 1499.9,
    durum: "stokta",
};
function urunYaz(u) {
    return `${u.ad}: ${u.fiyat} TL (${u.durum})`;
}
document.body.append(urunYaz(kulaklik));

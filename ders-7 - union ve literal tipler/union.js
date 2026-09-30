"use strict";
let kod = 1024;
kod = "klk-1024";
function kodYaz(deger) {
    if (typeof deger === "string") {
        return deger.toUpperCase();
    }
    return deger;
}
let durum = "yolda";
durum = "stokta";
document.body.append(`Kod: ${kodYaz(kod)} · Durum: ${durum}`);

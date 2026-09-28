"use strict";
const isim = "Mehmet";
const yas = 30;
function selamla(kisi, yil) {
    return `Merhaba ${kisi}, ${yil} yaşındasın.`;
}
document.body.append(selamla(isim, yas));

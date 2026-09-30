function ilk<T>(liste: T[]): T { return liste[0]; }

const fiyatlar = [1500, 900, 250];
const fiyat = ilk(fiyatlar);
document.body.append(`İlk fiyat: ${fiyat}`);

const adlar = ["Kulaklık", "Klavye"];
const ad = ilk(adlar);
document.body.append(` · İlk ürün: ${ad}`);

interface Sonuc<T> {
  veri: T;
  basarili: boolean;
}

const sonuc: Sonuc<string[]> = { veri: adlar, basarili: true };
document.body.append(` · ${sonuc.veri.length} ürün`);

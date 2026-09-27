// Tuple: uzunluğu ve her konumdaki tipi önceden belli olan dizi.

// Dizi: istediğimiz kadar eleman, hepsi aynı tipte.
const notlar: number[] = [70, 85, 92, 64];

// Tuple: tam iki eleman, ikisi de sayı (enlem, boylam).
const izmir: [number, number] = [38.42, 27.14];

// Her konumun tipi farklı olabilir: [ad, yaş]
const kisi: [string, number] = ["Can", 31];
const [ad, yas] = kisi;

// Fonksiyondan birden fazla değer döndürmek için de kullanılır.
function enYuksekVeEnDusuk(sayilar: number[]): [number, number] {
  return [Math.max(...sayilar), Math.min(...sayilar)];
}

const [enYuksek, enDusuk] = enYuksekVeEnDusuk(notlar);

console.log(izmir, `${ad} ${yas} yaşında`);
console.log("En yüksek:", enYuksek, "En düşük:", enDusuk);

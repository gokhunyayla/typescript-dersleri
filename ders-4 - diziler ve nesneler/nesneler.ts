// Nesneler: her alanın tipi ayrı ayrı çıkarılır.

const kitap = {
  ad: "Çalıkuşu",
  yazar: "Reşat Nuri Güntekin",
  yil: 1922,
};

kitap.ad = "Yaprak Dökümü";
kitap.yil = 1930;

// Nesnenin şeklini kendimiz de yazabiliriz.
let ogrenci: { ad: string; numara: number; mezun: boolean };
ogrenci = { ad: "Elif", numara: 1024, mezun: false };

console.log(kitap, ogrenci);

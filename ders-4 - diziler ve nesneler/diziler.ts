// Diziler: aynı tipteki değerlerden oluşan listeler.

const sehirler = ["İzmir", "Ankara", "Bursa"]; // string[]
sehirler.push("Trabzon");

// Boş bir diziyle başlıyorsak tipi kendimiz yazarız.
const puanlar: number[] = [];
puanlar.push(85);
puanlar.push(92);

console.log(sehirler, puanlar);

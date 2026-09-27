// Bu dosya bilerek hatalıdır: derlemeye çalıştığınızda TypeScript'in verdiği hatayı görmek için.

function toplamHesapla(urunFiyati: number, kargoUcreti: number): number {
  return urunFiyati + kargoUcreti;
}

const formdanGelenFiyat = "120";
const kargo = 30;

console.log("Toplam:", toplamHesapla(formdanGelenFiyat, kargo));

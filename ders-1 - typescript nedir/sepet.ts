// TypeScript: aynı hatayı kod çalışmadan önce, yazarken yakalar.

function toplamHesapla(urunFiyati: number, kargoUcreti: number): number {
  return urunFiyati + kargoUcreti;
}

const formdanGelenFiyat = "120";
const kargo = 30;

// Aşağıdaki satırın başındaki // işaretini kaldırın: TypeScript hatayı gösterecek.
// console.log("Toplam:", toplamHesapla(formdanGelenFiyat, kargo));

// Doğrusu: metni sayıya çevirip öyle göndermek.
console.log("Toplam:", toplamHesapla(Number(formdanGelenFiyat), kargo)); // Toplam: 150

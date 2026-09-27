// JavaScript: hata vermeden çalışır ama sonuç yanlıştır.
// Formdan gelen fiyat metin ("120") olarak gelir; kargo ücreti sayıdır.

function toplamHesapla(urunFiyati, kargoUcreti) {
  return urunFiyati + kargoUcreti;
}

const formdanGelenFiyat = "120"; // <input> değeri her zaman metindir
const kargo = 30;

console.log("Toplam:", toplamHesapla(formdanGelenFiyat, kargo)); // Toplam: 12030

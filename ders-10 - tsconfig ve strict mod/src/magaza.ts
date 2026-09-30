function toplamFiyat(fiyat: number, adet: number) {
  return fiyat * adet;
}

document.body.append(`Toplam: ${toplamFiyat(1499.9, 2)} TL`);

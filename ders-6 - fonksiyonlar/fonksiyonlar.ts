function toplamFiyat(fiyat: number, adet: number = 1): number {
  return fiyat * adet;
}

function yazdir(mesaj: string): void {
  document.body.append(mesaj);
}

function enPahali(): [string, number] {
  return ["Kulaklık", 1499.9];
}

let [ad, fiyat] = enPahali();
yazdir(`En pahalı ürün: ${ad}, ${toplamFiyat(fiyat, 2)} TL`);

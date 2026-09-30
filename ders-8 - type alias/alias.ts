type Durum = "stokta" | "tükendi" | "yolda" | "iade";

type Urun = {
  ad: string;
  fiyat: number;
  durum: Durum;
};

let kulaklik: Urun = {
  ad: "Kulaklık",
  fiyat: 1499.9,
  durum: "stokta",
};

function urunYaz(u: Urun) {
  return `${u.ad}: ${u.fiyat} TL (${u.durum})`;
}

document.body.append(urunYaz(kulaklik));

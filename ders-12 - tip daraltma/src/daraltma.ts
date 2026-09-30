function fiyatYaz(fiyat: number | string) {
  if (typeof fiyat === "string") {
    return `${fiyat} TL`;
  }
  return `${fiyat.toFixed(2)} TL`;
}

document.body.append(fiyatYaz(1499.9));

interface Urun {
  ad: string;
  aciklama?: string;
}

function etiket(urun: Urun) {
  if (urun.aciklama) {
    return `${urun.ad}: ${urun.aciklama.toUpperCase()}`;
  }
  return urun.ad;
}

let kulaklik: Urun = {
  ad: "Kulaklık",
  aciklama: "kablosuz",
};
document.body.append(` · ${etiket(kulaklik)}`);

type Durum = "stokta" | "tükendi" | "yolda";

function durumMesaji(durum: Durum) {
  if (durum === "stokta") {
    return "Hemen kargoda";
  }
  if (durum === "yolda") {
    return "Yakında stokta";
  }
  return `Şu an ${durum}`;
}

document.body.append(` · ${durumMesaji("yolda")}`);

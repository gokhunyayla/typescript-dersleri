interface Urun {
  ad: string;
  fiyat: number;
  stok: number;
}

function guncelle(urun: Urun, degisiklik: Partial<Urun>): Urun {
  return { ...urun, ...degisiklik };
}

const kulaklik: Urun = { ad: "Kulaklık", fiyat: 1500, stok: 5 };
const yeni = guncelle(kulaklik, { fiyat: 1200 });
document.body.append(`${yeni.ad}: ${yeni.fiyat} TL`);

function etiket(urun: Pick<Urun, "ad" | "fiyat">) {
  return `${urun.ad}: ${urun.fiyat} TL`;
}

type YeniUrun = Omit<Urun, "stok">;
const klavye: YeniUrun = { ad: "Klavye", fiyat: 900 };
document.body.append(` · ${etiket(klavye)}`);

const stoklar: Record<"kulaklik" | "klavye", number> = {
  kulaklik: 5,
  klavye: 0,
};
document.body.append(` · Stok: ${stoklar.kulaklik}`);

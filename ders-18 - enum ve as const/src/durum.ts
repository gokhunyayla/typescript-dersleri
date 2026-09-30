enum Durum {
  Beklemede,
  Kargoda,
  Teslim,
}

function durumMesaji(durum: Durum) {
  if (durum === Durum.Beklemede) return "Sipariş alındı";
  if (durum === Durum.Kargoda) return "Kargoda";
  return "Teslim edildi";
}

document.body.append(durumMesaji(Durum.Kargoda));

const DURUM = {
  Beklemede: 0,
  Kargoda: 1,
  Teslim: 2,
} as const;
document.body.append(` · Kod: ${DURUM.Teslim}`);

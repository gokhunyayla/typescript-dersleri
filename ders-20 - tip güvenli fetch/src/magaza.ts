interface Urun {
  ad: string;
  fiyat: number;
}

async function getir<T>(url: string): Promise<T> {
  const cevap = await fetch(url);
  return await cevap.json();
}

async function goster() {
  const urunler = await getir<Urun[]>("data/urunler.json");
  document.body.append(`${urunler[0].ad}: ${urunler[0].fiyat} TL`);
}

goster();

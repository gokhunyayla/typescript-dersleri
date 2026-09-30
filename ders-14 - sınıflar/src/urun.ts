class Urun {
  ad: string;
  fiyat: number;

  constructor(ad: string, fiyat: number) {
    this.ad = ad;
    this.fiyat = fiyat;
  }

  etiket() {
    return `${this.ad}: ${this.fiyat} TL`;
  }
}

const kulaklik = new Urun("Kulaklık", 1500);
const klavye = new Urun("Klavye", 900);
const sepet: Urun[] = [kulaklik, klavye];

document.body.append(kulaklik.etiket());
document.body.append(` · Sepette ${sepet.length} ürün`);

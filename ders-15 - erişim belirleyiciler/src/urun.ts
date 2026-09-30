class Urun {
  constructor(readonly ad: string, private fiyat: number) {}

  etiket() {
    return `${this.ad}: ${this.fiyat} TL`;
  }

  indirimYap(oran: number) {
    this.fiyat = this.fiyat * (1 - oran / 100);
  }
}

const kulaklik = new Urun("Kulaklık", 1500);
kulaklik.indirimYap(20);
document.body.append(kulaklik.etiket());

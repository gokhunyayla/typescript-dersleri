export class Urun {
  constructor(readonly ad: string, private fiyat: number) {}

  etiket() {
    return `${this.ad}: ${this.fiyat} TL`;
  }
}

export class Urun {
  constructor(readonly ad: string, private fiyat: number) {}

  etiket() {
    return `${this.ad}: ${this.fiyat} TL`;
  }
}

export function indirimli(fiyat: number, oran: number) {
  return fiyat * (1 - oran / 100);
}

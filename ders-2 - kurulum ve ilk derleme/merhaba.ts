// İlk TypeScript dosyamız

const isim: string = "Ayşe";
const yas: number = 28;

function selamla(kisi: string, yil: number): string {
  return `Merhaba ${kisi}, ${yil} yaşındasın.`;
}

console.log(selamla(isim, yas));

const isim: string = "Mehmet";
const yas: number = 30;

function selamla(kisi: string, yil: number): string {
  return `Merhaba ${kisi}, ${yil} yaşındasın.`;
}

document.body.append(selamla(isim, yas));

let kod: number | string = 1024;
kod = "klk-1024";

function kodYaz(deger: number | string) {
  if (typeof deger === "string") {
    return deger.toUpperCase();
  }
  return deger;
}

let durum: "stokta" | "tükendi" | "yolda" = "yolda";
durum = "stokta";

document.body.append(`Kod: ${kodYaz(kod)} · Durum: ${durum}`);

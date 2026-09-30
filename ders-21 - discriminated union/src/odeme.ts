interface Kart {
  tur: "kart";
  kartNo: string;
}

interface Havale {
  tur: "havale";
  iban: string;
}

interface Kapida {
  tur: "kapida";
}

interface Cuzdan {
  tur: "cuzdan";
}

type Odeme = Kart | Havale | Kapida | Cuzdan;

function aciklama(odeme: Odeme) {
  switch (odeme.tur) {
    case "kart":
      return `Kart: **** ${odeme.kartNo.slice(-4)}`;
    case "havale":
      return `Havale: ${odeme.iban}`;
    case "kapida":
      return "Kapıda ödeme";
    case "cuzdan":
      return "Dijital cüzdan";
    default:
      const kontrol: never = odeme;
      return kontrol;
  }
}

const odeme: Odeme = { tur: "cuzdan" };
document.body.append(aciklama(odeme));

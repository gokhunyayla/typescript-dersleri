import { Urun, indirimli } from "./urun.js";

const kulaklik = new Urun("Kulaklık", indirimli(1500, 20));
document.body.append(kulaklik.etiket());

let fiyat: unknown = 1499.9;

if (typeof fiyat === "number") {
  document.body.append(`Fiyat: ${fiyat.toFixed(2)} TL`);
} else {
  document.body.append("Fiyat bilgisi geçersiz");
}

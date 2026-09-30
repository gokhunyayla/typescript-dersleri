const bilgi = document.querySelector("#bilgi")!;
bilgi.textContent = "Sepetiniz boş";
const buton = document.querySelector("button")!;
const adet = document.querySelector("#adet") as HTMLInputElement;

buton.addEventListener("click", () => {
  bilgi.textContent = `Sepette ${adet.value} ürün var`;
});

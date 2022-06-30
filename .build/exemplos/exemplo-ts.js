let button = document.getElementById("button");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
function adicionarNumero(numero1, numero2, devePrintar2, frase2) {
  let resultado = numero1 + numero2;
  if (devePrintar2) {
    console.log(frase2 + resultado);
  }
  return numero1 + numero2;
}
let devePrintar = true;
let frase;
frase = "O valor \xE9: ";
if (button) {
  button.addEventListener("click", () => {
    if (input1 && input2) {
      console.log(adicionarNumero(Number(input1.value), Number(input2.value), devePrintar, frase));
    }
  });
}
//# sourceMappingURL=exemplo-ts.js.map

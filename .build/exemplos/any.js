let valorAny;
valorAny = 3;
valorAny = "ol\xE1";
valorAny = true;
let valorString = "teste";
valorString = valorAny;
let valorString2 = "testao";
valorString2 = valorAny;
function somarString(string1, string2) {
  console.log(string1 + string2);
}
somarString(valorString, valorString2);
somarString("ol\xE1 ", ",como vai?");
//# sourceMappingURL=any.js.map

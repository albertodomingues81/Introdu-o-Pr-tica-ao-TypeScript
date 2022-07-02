function somarValores(input1, input2) {
  if (typeof input1 === "string" || typeof input2 === "string") {
    return input1.toString() + input2.toString();
  } else {
    return input1 + input2;
  }
}
console.log(somaValores(1, 5));
console.log(somaValores("ol\xE1", ",tudo bem?"));
console.log(somaValores("que dia \xE9 hoje? ", 5));
//# sourceMappingURL=tipos.js.map

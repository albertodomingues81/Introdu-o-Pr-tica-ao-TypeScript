const pessoa = {
  nome: "Michele",
  idade: 28,
  profissao: "desenvolvedora"
};
pessoa.idade = 25;
const andre = {
  nome: "Andre",
  idade: 25,
  profissao: "pintor"
};
const adriana = {
  nome: "Adriana",
  idade: 25,
  profissao: "desenvolvedora"
};
var Profissao;
(function(Profissao2) {
  Profissao2[Profissao2["Professora"] = 0] = "Professora";
  Profissao2[Profissao2["Atriz"] = 1] = "Atriz";
  Profissao2[Profissao2["Desenvolvedora"] = 2] = "Desenvolvedora";
  Profissao2[Profissao2["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
  nome: "Vanessa",
  idade: 23,
  profissao: 2
};
const maria = {
  nome: "Maria",
  idade: 23,
  profissao: 2
};
const jessica = {
  nome: "Jessica",
  idade: 28,
  materias: ["Matem\xE1tica discreta", "programa\xE7\xE3o"]
};
const monica = {
  nome: "Monica",
  idade: 28,
  materias: ["Matem\xE1tica discreta", "programa\xE7\xE3o"]
};
function listar(lista) {
  for (const item of lista) {
    console.log("- ", item);
  }
}
//# sourceMappingURL=objetos.js.map

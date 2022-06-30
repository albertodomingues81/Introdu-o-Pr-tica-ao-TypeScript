const pessoa = {
  nome: 'Michele',
  idade:28,
  profissao: 'desenvolvedora'
}

pessoa.idade = 25;

const andre: {nome: string, idade: number, profissao: string} = {
  nome: 'Andre',
  idade: 25,
  profissao: 'pintor'
  
}

const adriana: {nome: string, idade: number, profissao: string} = {
  nome: 'Adriana',
  idade: 25,
  profissao: 'desenvolvedora'
  
}

enum Profissao {
  Professora,
  Atriz,
  Desenvolvedora,
  JogadoraDeFutebol
}

interface Pessoa{
  nome: string,
  idade: number,
  profissao?: Profissao
}

interface Estudante extends Pessoa {
  materias: string[]
}

const vanessa: Pessoa = {
  nome: 'Vanessa',
  idade: 23,
  profissao: Profissao.Desenvolvedora
}

const maria: Pessoa = {
  nome: 'Maria',
  idade: 23,
  profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
  nome:'Jessica',
  idade: 28,
  materias: ['Matemática discreta', 'programação']
}

const monica: Estudante = {
  nome:'Monica',
  idade: 28,
  materias: ['Matemática discreta', 'programação']
}

function listar(lista: string[]) {
  for (const item of lista) {
    console.log('- ', item);
  }
}
  

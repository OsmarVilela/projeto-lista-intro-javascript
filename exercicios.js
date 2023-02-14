// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("digite a altura"))
  const largura = Number(prompt("digite a largura"))
  const areaRetangulo = altura * largura

  console.log(areaRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("ano atual"))
  const anoNascimento = Number(prompt("ano nascimento"))
  const idade = anoAtual - anoNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
const imc = peso / (altura * altura)
return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual seu nome?")
  const idade = Number( prompt("Qual sua idade?"))
  const email = prompt("Qual seu email?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corFavorita1 = prompt("Qual sua cor favorita?")
  const corFavorita2 = prompt("Qual sua cor favorita?")
  const corFavorita3 = prompt("Qual sua cor favorita?")
  const coresFavoritas = [corFavorita1, corFavorita2, corFavorita3]
  console.log(coresFavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const stringMaiuscula = string.toUpperCase()
  return stringMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const minimoIngressosVendidos = custo / valorIngresso
  return minimoIngressosVendidos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const stringIgual = (string1.length - string2.length) === 0
  return stringIgual
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const elemento = array[0]
  return elemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimoElemento = array.reverse()
  return ultimoElemento[0]
} 

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiroArray = array[0]
  const ultimoArray = array[array.length -1]
  array.splice(0,1)
  array.pop()
  array.splice(0,0,ultimoArray)
  array.push(primeiroArray)
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const stringIgual = string1.toUpperCase() === string2.toUpperCase()
  return stringIgual
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number( prompt("Qual o ano atual?"))
  const anoNascimento = Number( prompt("Qual seu ano de nascimento?"))
  const anoRg = Number(prompt("Qual ano de emissão de seu RG?"))

  const criterioIdade1 = (anoAtual - anoNascimento) <= 20 && (anoAtual - anoRg) >= 5
  const criterioIdade2 = (anoAtual - anoNascimento) >= 20 && (anoAtual - anoNascimento) <= 50 && (anoAtual - anoRg) >= 10
  const criterioIdade3 = (anoAtual - anoNascimento) >= 50 && (anoAtual - anoRg) >= 15
  
  const resultadoFinal = (criterioIdade1 || criterioIdade2 || criterioIdade3)

  console.log(resultadoFinal)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const checkAno4 = ano % 4 === 0 // se igual zero é bissexto true
  const checkAno100 = ano % 100 !== 0 // se diferente zero true é bissexto
  const checkAno400 = ano % 400 === 0 // se igual zero é bissexto true
  const resultadoBissexto = checkAno4 && checkAno100 || checkAno400

  return resultadoBissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
const maiorIdade = prompt("Você tem mais de 18 anos?")
const ensinoMedio = prompt("Você possui ensino médio completo?")
const horarioCurso = prompt("Você possui disponibilidade no horário do curso?")
const confirmaMaiorIdade = maiorIdade === "sim"
const confirmaEnsinoMedio = ensinoMedio === "sim"
const confirmaHorarioCurso = horarioCurso === "sim"
const confirmacaoTotal = (confirmaMaiorIdade && confirmaEnsinoMedio && confirmaHorarioCurso)
console.log(confirmacaoTotal)
}
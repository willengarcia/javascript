const caixa = document.querySelector('#caixa')
let mapa = new Map()

mapa.set("Curso", "Javascript") // "chave", "valor" - chave não pode ser a mesma, senão subscreve
mapa.set(1, 'teste1')
// mapa.get("chave") > verifica se existe a chave
console.log(mapa.get('Curso'))
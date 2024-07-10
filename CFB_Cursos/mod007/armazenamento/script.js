const texto = document.getElementById('texto')
const p = document.getElementById('p_texto')
const btn = document.getElementById('btn')

btn.addEventListener('click', (evt)=>{
    console.log('oi')

})
let num= 10
window.localStorage.setItem('numero', num) // definir a chave e item
console.log(localStorage.getItem('numero')) // mostra o valor da chave 
// localStorage.clear() // remove as chaves
localStorage.key(0) // retorna o indice da chave
localStorage.length // tamanho do localStorage

let obj = {
    nome: 'Willen',
    sobrenome: 'Garcia',
}
let str = JSON.stringify(obj) // converte objeto em JSON
sessionStorage.setItem(0, str) // seta a conversão para sessão
let sessao = sessionStorage.getItem(0) // pega a chave da sessao
console.log(JSON.parse(sessao).nome) // mostra a conversao em obj
localStorage.clear()
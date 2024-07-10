const tempo = document.getElementById('tempo')
const nivel = document.getElementById('nivel')
const pressao = document.getElementById('pressao');
const btn = document.getElementById('btn')
// Pegando os dados de uma API do REPLIT
const obterDados=()=>{
    const endpoint = 'https://69fe5103-12c0-4a89-a546-5ca9ee7bc528-00-uq97wq30hwxi.picard.replit.dev/'
    fetch(endpoint) // por padrão esta´ consumindo usando o metodo get, para enviar, só usar o post
    .then(res=>res.json()) // recebe o retorno do fetch convertida
    .then(dados=>{
        console.log(dados) // 'dados' da api
        tempo.innerHTML = `Temperatura: ${dados.tempo}Cº`
        nivel.innerHTML = `Nível: ${dados.nivel}m`
        pressao.innerHTML = `Pressão: ${dados.pressao}atm`
    })
};
// let intervalo = setInterval(obterDados, 3000)

// Usando o método post

let dados = { // dados que vai ser gravado
    nome:'bruno',
    sobrenome:'silva',
    idade:16
}
let cabecalho = {
    method: 'post',
    body: JSON.stringify(dados) // converte em um json
}
const gravarDados=()=>{
    const endP = 'https://69fe5103-12c0-4a89-a546-5ca9ee7bc528-00-uq97wq30hwxi.picard.replit.dev/'
    fetch(endP, cabecalho) // onde vai ser enviado
    .then(res=>res.json())
    .then(ret=>{
        console.log(ret)
    })
}
btn.addEventListener('click', (evt)=>{
    gravarDados()
})
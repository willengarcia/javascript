// function* cores(){ // funções geradoras
//     yield 'vermelho'//  retorna o conteudo
//     yield 'azul'
//     yield 'verde'
// }
// const itc = cores()
// console.log(itc.next().value) // primeira chamada
// console.log(itc.next().value) // segunda chamada
// console.log(itc.next().value) // terceira  chamada

// function* perguntas(){
//     const nome = yield 'Qual é o seu nome? '
//     const esporte = yield 'Qual é o seu time favorito?'
//     return `Seu nome é ${nome}, e seu esporte favorito é ${esporte}`
// }
// const itr = perguntas()
// console.log(itr.next().value)
// console.log(itr.next('bruno').value)
// console.log(itr.next('Sei lá').value)

// function* contador(){
//     let i=0
//     while(true){
//         yield i++
//     }
// }
// let cursos = ['JS', 'HTML', 'Python', 'Css', 'PHP']
// cursos.map((elemento, i)=>{ // Percorre todas as coleções, mais eficiente que o for
//     return document.write(`<div>${elemento}</div>`)
// }) // elemento, indice
// let elemento = document.getElementsByTagName("div")
// let el = [...elemento]
// el.map((e, i)=>{
//     e.innerHTML = 'oi'
// })

// const elemento = document.getElementsByTagName('div')
// const val = Array.prototype.map.call(elemento, ({innerHTML})=>innerHTML)
// console.log(val)
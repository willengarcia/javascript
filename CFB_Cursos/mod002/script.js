// metodo FIND > pesquisa e retorna o elemento pesquisado do array
// metodo EVERY > verifica e procura por equivalencia de uma regra, retorna true ou false
// metodo SOME > valida o array, desde que pelo menos um valor coincida com o que eu esteja pesquisando.
// metodo REDUCE > reduz o array, com base de uma regra
const p_array = document.querySelector('#array')
const p_resultado = document.querySelector('#resultado')
const b_botao = document.querySelector('#botao')

const elementosArray = [1,2,3,4,5]
let ant = []
let atu = []
p_array.innerHTML = "["+elementosArray+"]"

// Metodo FIND:
// b_botao.addEventListener('click', (evento)=>{
//     const ret = elementosArray.find((e, i)=>{// Pode colocar como parametros: elemento, indice ou array
//         if(e.toUpperCase() == i_pesquisa.value.toUpperCase()){
//             p_resultado.innerHTML = 'Valor encontrado: '+e+ ' na posicao '+i
//         }
//         // Muito util para pesquisa no geral
//     })
// })

// Metodo EVERY:
// b_botao.addEventListener('click', (evt)=>{
//     p_resultado.innerHTML = 'Não conforme'
//     const retorno = elementosArray.every((e, i)=>{ // pode retornar o elemento, posicao ou o array
//         if(e<=18){
//             p_resultado.innerHTML = 'Não conforme com o valor: '+elementosArray[i]
//         }
//         return e>=18
//     })
//     if(retorno){
//         p_resultado.innerHTML = 'OK!'
//     }
//     console.log(retorno)
// })

//Metodo SOME:
// b_botao.addEventListener('click', (evt)=>{
//     p_resultado.innerHTML = 'Não conforme'
//     const retorno = elementosArray.some((e, i)=>{ // pode retornar o elemento, posicao ou o array
//         if(e<=18){ //regra
//             p_resultado.innerHTML = 'Não conforme com o valor: '+elementosArray[i]
//         }
//         return e>=18
//     })
//     if(retorno){
//         p_resultado.innerHTML = 'OK!'
//     }
//     console.log(retorno)
// })

// Metodo REDUCE:
b_botao.addEventListener('click', (evt)=>{
    p_resultado.innerHTML = elementosArray.reduce((ante, atual, pos)=>{ // pode retornar o anterior da operação, atual ou posicao
        ant.push(ante)
        atu.push(atual)
        return atual+ante
    })
    p_resultado.innerHTML +='<br/> Anterior: '+ant+'<br/> Atual: '+atu
})
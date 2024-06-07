// BASE
// const valores = [10,23,34,5,65]
// const itValores = valores[Symbol.iterator]() // Criando um iterador
// .next() - se done for false, ele não chegou no final, e ele sempre pega o primeiro valor a cada chamada
// posso fazer minha própria iteração.
// console.log(itValores.next().value)

//  ---------------- ARRAY --------------------
// const caixa = document.querySelector('#caixa')
// let dados = [1,2,3,4]
// let cursos = ['htmml', 'css', 'js', dados]
// cursos.push('python') // função que adiciona no final
// cursos.unshift('mysql') // função que adiciona no inicio
// cursos.pop() // função que remove o ultimo elemento
// cursos.shift() // função que remove o primeiro elemento
// cursos.map((elementos)=>{
//     let p = document.createElement('p')
//     p.innerHTML = elementos
//     caixa.appendChild(p)
// })
// let valores = [1, 2,3,4,5]
// let op = [
//     (valor)=>{
//         let res = 0
//         for(v of valor){
//             res+=v
//         }
//         return res
//     },
//     (valor)=>{
//         let res = 1
//         for(v of valor){
//             res*=v
//         }
//         return res
//     },
//     (valor)=>{
//         for(v of valor){
//             console.log(v)
//         }
//     },
// ]
// console.log(op[0](valores)) // executanto das funções, indo pelo indice
// console.log(op[1](valores))
// console.log(op[2](valores))
function calcular(opcao, valor){
    if(opcao == 'acao'){
        if(valor == '+' || valor == '-' || valor == '*' || valor == '/'){
            document.querySelector('.entrada').value +=valor
        }else if(valor === '='){
            document.querySelector('.saida').value +=eval(document.querySelector('.entrada').value)
        } else if(valor === 'del'){
            document.querySelector('.entrada').value = ''
            document.querySelector('.saida').value = ''
        }
    } else if(opcao == 'valor') {
        document.querySelector('.entrada').value += valor
    }
}
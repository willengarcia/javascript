// // Adicionando os eventos em um elemento
// const c1 = [...document.querySelectorAll('.cursos')]
// c1.map((el)=>{
//     el.addEventListener('click', (evt)=>{
//     console.log('Clicou!')
//     console.log(evt.target) // Saber quem foi clicado e ver suas propriedades
//     let elemento = evt.target
//     elemento.classList.add('destaque')
// }) // evento, acao (Pode usar as funções para colocar as ações)
// }) // Evento de clcick em todos

// ___________ Desafio de Transferencia ________
// const elementoSelecionado = [...document.querySelectorAll('.cursos')]
// const botao = document.querySelector('.botao')
// const div2 = document.querySelector('.container2')
// const div1 = document.querySelector('.container1')
// elementoSelecionado.map((el)=>{
//     el.addEventListener('click', (evento)=>{
//         el.classList.toggle('destaque')
//         console.log(el)
//     })
// })
// botao.addEventListener('click', ()=>{
//     const cursoSelecionados = [...document.querySelectorAll('.destaque')]
//     const cursoNaoSelecionados = [...document.querySelectorAll('.cursos:not(.destaque)')]
//     cursoSelecionados.map((elemento) =>{
//         div2.appendChild(elemento)
//     })
//     cursoNaoSelecionados.map((elemento)=>{
//         div1.appendChild(elemento)
//     })
// })

// const div1 = document.querySelector('.container1')
// const btn = [...document.querySelectorAll('.cursos')]
// console.log(div1.hasChildNodes())
// console.log(btn.children)
// let c = div1.children.length > 0 ? 'Possui Filhos':'Não Possui Filhos'
// console.log(div1.firstElementChild.innerHTML = 'tese') // Alterando o primeiro elemento
// console.log(div1.children[2].innerHTML = 'tese') // Alterando os elementos irmaos por indice
// console.log(btn[0].parentElement.parentElement) // Pegando os avós

// cursos = ['html', 'css', 'js', 'php', 'mysql']
// const btn = document.querySelector('.botao')
// const elementos = [...document.querySelectorAll('.cursos')]
// cursos.map((elemento, chave)=>{
//     const novoElemento = document.createElement('div')
//     const caixa = document.querySelector('.container1')
//     novoElemento.addEventListener('click', (elemento)=>{
//         caixa.removeChild(novoElemento)
//     }) // Muito util para fazer lixeiras
//     caixa.appendChild(novoElemento)
//     novoElemento.innerHTML = elemento
//     novoElemento.setAttribute('class', `cursos c${chave}`)
//     novoElemento.setAttribute('id', chave)
// }) // Colocando os elementos Automaticamente

// const caixa = document.querySelector('.container1')
// // Adicionando, Alterando, Excluindo Elementos
// caixa.appendChild(novoElemento)
// novoElemento.innerHTML = 'Teste'
// novoElemento.setAttribute('class', 'cursos') // Atributo, Valor - colocar id, class...
 
// Metodo FILTER
const idade = [12,54,20,35,15,18]
const maiorIdade = idade.filter((valor)=>{
    return valor>=18?console.log(`Maior de idade: ${valor}`):console.log(`Menor de idade: ${valor}`)
}) // Recebe valor, indice e o array
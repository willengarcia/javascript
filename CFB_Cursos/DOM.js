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
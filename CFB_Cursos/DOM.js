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

const elementoSelecionado = [...document.querySelectorAll('.cursos')]
const botao = document.querySelector('.botao')
const div2 = document.querySelector('.container2')

elementoSelecionado.map((el)=>{
    el.addEventListener('click', (evt)=>{
        console.log(evt.target.id)
    })
    botao.addEventListener('click', (evt)=>{
    div2.appendChild(evt.target.id)})
})


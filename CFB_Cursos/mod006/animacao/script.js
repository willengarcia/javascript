const direita = document.getElementById('direita')
const esquerda = document.getElementById('esquerda')
const para = document.getElementById('para')
const caixa = document.getElementById('caixa')

let init = ()=>{
    caixa.style.position = 'relative'
    caixa.style.left = '1px'
}
let ani = null
const mover =(dir)=>{
    caixa.style.left = parseInt(caixa.style.left)+(10*dir)+'px'
}
para.addEventListener('click', (evt)=>{
    clearInterval(ani)
})
direita.addEventListener('click', (evt)=>{
    clearInterval(ani)
    ani = setInterval(mover,20,-1)
})

esquerda.addEventListener('click', (evt)=>{
    clearInterval(ani)
    ani = setInterval(mover,20,1)
})

window.onload = init
const direita = document.getElementById('direita')
const esquerda = document.getElementById('esquerda')
const para = document.getElementById('para')
const caixa = document.getElementById('caixa')

let init = ()=>{
    caixa.style.position = 'relative'
    caixa.style.left = '1px'
    caixa.style.width = '50px'
    tamMax = window.innerWidth-parseInt(caixa.style.width)
}
let tamMax = null
let ani = null
const mover =(dir)=>{
    if(dir>0){
        if(parseInt(caixa.style.left) <= tamMax){
            caixa.style.left = parseInt(caixa.style.left)+(10*dir)+'px'
        }else{
            clearTimeout(ani)
        }        
    }else if(dir<0){
        if(parseInt(caixa.style.left) >= 0){
            caixa.style.left = parseInt(caixa.style.left)+(10*dir)+'px'
        }else{
            clearTimeout(ani)
        }
    }
    ani = setTimeout(mover, 20, dir)
}
direita.addEventListener('click', (evt)=>{
    clearTimeout(ani)
    mover(1)
})
esquerda.addEventListener('click', (evt)=>{
    clearTimeout(ani)
    mover(-1)
})
para.addEventListener('click', ()=>{
    clearTimeout(ani)
})

window.onload = init()
window.addEventListener('resize', ()=>{
    tamMax = window.innerWidth-parseInt(caixa.style.width)
})
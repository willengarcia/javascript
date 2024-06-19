const math = document.querySelector('.math')
const pupila = [...document.getElementsByClassName('olho')]
let posX = 0
let posY = 0
setInterval(()=>{
    math.innerHTML = Math.floor(Math.random()*700)
}, 1000)
window.addEventListener('mousemove', (evento)=>{
    posX = evento.clientX // Captura a posição X e Y do mouse
    posY = evento.clientY

    const rotacao = Math.atan2(posY, posX) * 360 / Math.PI // retorna o arco tangente de 2 coeficientes


    pupila.forEach((olho)=>{
        olho.style.transform = `rotate(${rotacao}deg)`
    })
})
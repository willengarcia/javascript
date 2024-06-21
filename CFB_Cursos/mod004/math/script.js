const math = document.querySelector('.math')
const pupila = [...document.getElementsByClassName('olho')]
let posX = 0
let posY = 0
setInterval(()=>{
    math.innerHTML = Math.floor(Math.random()*700)
}, 1000)
window.addEventListener('touchmove', (evento)=>{
    posX = evento.touches[0].clientX // Captura a posição X e Y da tela do smartphone
    posY = evento.touches[0].clientY

    const rotacao = Math.atan2(posY -window.innerHeight/2, posX-window.innerWidth/2) * 180 / Math.PI // retorna o arco tangente de 2 coeficientes
    console.log(rotacao)

    pupila.forEach((olho)=>{
        olho.style.transform = `rotate(${rotacao}deg)`
    })
})
window.addEventListener('mousemove', (evento)=>{
    posX = evento.clientX // Captura a posição X e Y da tela do mouse
    posY = evento.clientY

    const rotacao = Math.atan2(posY, posX) * 360 / Math.PI // retorna o arco tangente de 2 coeficientes
    console.log(rotacao)

    pupila.forEach((olho)=>{
        olho.style.transform = `rotate(${rotacao}deg)`
    })
})
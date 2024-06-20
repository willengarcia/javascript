const span = document.getElementById('area-num-objetos')
const input = document.getElementById('objetos')
const botaoAdicionar = document.getElementById('adicionar')
const botaoRemover = document.getElementById('remover')
const containerBolas = document.getElementById('bolas')

let larguraPalco =  containerBolas.offsetHeight
let alturaPalco =  containerBolas.offsetWidth
let bolas = []

window.addEventListener('resize', (evento)=>{
    larguraPalco =  containerBolas.offsetHeight
    alturaPalco =  containerBolas.offsetWidth
})

class Bolha{
    constructor(width_palco, height_palco){
        this.velX = Math.floor(Math.random()*2)+0.5
        this.velY = Math.floor(Math.random()*2)+0.5
        this.posX = Math.floor(Math.random()*(width_palco)-this.tam)
        this.posY = Math.floor(Math.random()*(height_palco)-this.tam)
        this.dirX = (Math.floor(Math.random())*10)>5?1:-1
        this.dirY = (Math.floor(Math.random())*10)>5?1:-1

        this.controle = setInterval(this.controlar,10)
    }
    adicionar(bolhas){
        let b = 1
        while(b<=bolhas){
            this.tam = Math.floor(Math.random()*15)+10
            this.r = Math.floor(Math.random()*255)
            this.g = Math.floor(Math.random()*255)
            this.b = Math.floor(Math.random()*255)
            
            this.elemento = document.createElement('div')
            this.elemento.setAttribute('class','bola')
            this.elemento.setAttribute('id', `id${Math.floor(Math.random()*100000)}`)
            this.elemento.style.backgroundColor = `rgb(${this.r},${this.g}, ${this.b})`
            this.elemento.style.height = `${this.tam}px`
            this.elemento.style.width = `${this.tam}px`
            this.elemento.style.borderRadius = '50%'
            console.log(this.elemento)
            containerBolas.appendChild(this.elemento)
            bolas.push(b)
            span.innerHTML = bolas.length
            b++
        }
    }
    remover(){
        const elemento = [...document.querySelectorAll('.bola')]
        elemento.forEach((el)=>{
            el.remove()
        })
    }
    controlar(){

    }
}
botaoAdicionar.addEventListener('click', ()=>{
    let b = new Bolha(larguraPalco, alturaPalco)
    b.adicionar(input.value)
})
botaoRemover.addEventListener('click', ()=>{
    let b = new Bolha()
    b.remover()
})
const span = document.getElementById('area-num-objetos')
const input = document.getElementById('objetos')
const botaoAdicionar = document.getElementById('adicionar')
const botaoRemover = document.getElementById('remover')
const containerBolas = document.getElementById('bolas')
class Bolha{
    adicionar(bolhas){
        let b = 1
        while(b<=bolhas){
            this.elemento = document.createElement('div')
            this.elemento.setAttribute('class','bola')
            this.elemento.style.backgroundColor = `red`
            console.log(this.elemento)
            containerBolas.appendChild(this.elemento)
            b++
        }
    }
    remover(){
        const elemento = [...document.querySelectorAll('.bola')]
        elemento.forEach((el)=>{
            el.remove()
        })
    }
}
let b = new Bolha()
botaoAdicionar.addEventListener('click', ()=>{
    b.adicionar(input.value)
})
botaoRemover.addEventListener('click', ()=>{
    b.remover()
})
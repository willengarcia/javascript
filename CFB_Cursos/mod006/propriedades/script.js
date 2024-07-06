const q1 = document.getElementById('q1')
const q2 = document.getElementById('q2')
const posX = document.getElementById('posX')
const posY = document.getElementById('posY')
const largura = document.getElementById('largura')
const altura = document.getElementById('altura')
let descrever = (ele)=>{
    posX.innerText = `posX: ${ele.getBoundingClientRect().x}`
    posY.innerText = `posX: ${ele.getBoundingClientRect().y}`

    largura.innerText = `Largura: ${ele.getBoundingClientRect().width}`
    altura.innerText = `Altura: ${ele.getBoundingClientRect().height}`
}
q1.accessKey = 'n' // Pressiona a tecla alt+(tecla definida)
q2.accessKey = 'b'
console.log(q1.accessKey)
q1.addEventListener('click', (el)=>{
    descrever(el.target)
})
q2.addEventListener('click', (el)=>{
    descrever(el.target)
})
// getBoundingClientRect() pega os dados como altura, largura, eixo x e y 
// accesskey define/obtem uma tecla de atalho para um elemento
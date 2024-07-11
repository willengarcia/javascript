const timer = document.getElementById('timer')
const zerar = document.getElementById('zerar')
const iniciar = document.getElementById('iniciar')
const parar = document.getElementById('parar')

let tmpInicial = null // quando rodei a aplicação
let intervalo = null
let clear = 0
const contador=(acao)=>{ // quando ele chama a função contador
    const tmpAtual = Date.now()
    let seg = Math.floor((tmpAtual - tmpInicial)/1000)
    timer.innerHTML = converter(seg)
}
const converter =(segundos)=>{
    const hora = Math.floor(segundos/3600)
    const resto = segundos%3600
    const minuto = Math.floor(resto/60)
    const segundo = Math.floor(resto%60)
    const formatado =  (hora < 10 ? "0"+hora:hora)+":"+(minuto < 10 ? "0"+minuto:minuto)+":"+(segundo < 10 ? "0"+segundo:segundo)
    return formatado
}
zerar.addEventListener('click', (evt)=>{
    timer.innerHTML = '00:00:00'
    setTimeout(()=>{
        clearInterval(intervalo)
    }, 1)
})
iniciar.addEventListener('click', (evt)=>{
    tmpInicial = Date.now()
    intervalo = setInterval(contador, 1000)
})
parar.addEventListener('click', (evt)=>{
    setTimeout(()=>{
        clearInterval(intervalo)
    }, 1)
})

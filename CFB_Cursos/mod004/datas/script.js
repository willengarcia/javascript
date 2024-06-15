const data = new Date()
const div = document.querySelector('.data')
const relogio = document.querySelector('.relogio')
const parar = document.querySelector('#parar')
const ativar = document.querySelector('#ativar')
const input = document.querySelector('#tmp_alarme')
const hora_alarme = document.querySelector('#hora_alarme')

let dia = data.getDate()
dia = dia<10?"0"+dia:dia
let mes = data.getDay()
mes = mes<10?"0"+mes:mes


const data_formatada = `${dia}/${mes}/${data.getFullYear()}`
div.innerHTML = `Data atual: ${data_formatada}`

const rel = ()=>{
    const data = new Date()
    let hora = data.getHours()
    hora = hora<10?"0"+hora:hora

    let minuto = data.getMinutes()
    minuto = minuto<10?"0"+minuto:minuto

    let segundo = data.getSeconds()
    segundo = segundo<10?"0"+segundo:segundo
    relogio.innerHTML =`${hora}:${minuto}:${segundo}`

    if(alarmeAtivado){
        if(data.getTime() >= tsAlarme){
            alarmeAtivado = true
            console.log('Alarme tocando!!!!')
        }
    }
}
const intervalo = setInterval(rel, 1000) // a cada milissegundo, ele chama a função

let tsAlarme = null
let tsAtual = null
let alarmeAtivado = false
let alarmeDesativado = false
ativar.addEventListener('click',()=>{
    const data = Date.now() // Pega o horário atual
    tsAlarme = data+(input.value*1000) // Pega o valor do input e soma com a data atual
    alarmeAtivado = true

    const dataAlarme = new Date(tsAlarme)
    hora_alarme.innerHTML = `Hora do Alarme: ${dataAlarme.getHours()}:${dataAlarme.getMinutes()}:${dataAlarme.getSeconds()}`
})
parar.addEventListener('click',()=>{
    alarmeAtivado = false
    alarmeDesativado = false
    hora_alarme.innerHTML = 'Hora do Alarme: '
    input.value = 0
    
})
rel()
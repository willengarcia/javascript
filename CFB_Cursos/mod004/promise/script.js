const div = document.getElementById('pro')
const btn = document.getElementById('promessa')


function promise(){
    let promessa = new Promise((ok, erro)=>{ // Retorna ok ou erro
        let resultado = true
        let tempo_segundos = 3000
        
        setTimeout(()=>{
            if(resultado) {
                ok('Deu tudo certo')
            }else {
                erro('Deu tudo errado')
            }
        }, tempo_segundos)
    })
    return promessa
}
btn.addEventListener('click', ()=>{
    div.innerHTML = 'Processando...'
    promise()
        .then((ok)=>{
            div.innerHTML = ok
            div.classList.remove('erro')
            div.classList.add('ok')
        }) // Deu certo
        .catch((erro)=>{
            div.innerHTML = erro
            div.classList.remove('ok')
            div.classList.add('erro')
        }) // Deu errado
        console.log(promise())
})
// let resultado = false
// let tempo_segundos = 3000

// setInterval(()=>{
//     resultado = true
// }, tempo_segundos)

// if(resultado) {
//     div.innerHTML = "Deu tudo certo"
//     div.classList.remove('erro')
//     div.classList.add('ok')
// }else {
//     div.innerHTML = "Deu tudo errado"
//     div.classList.remove('ok')
//     div.classList.add('erro')
// } // nesse código, indenpendendo do setInterval, ele vai prosseguir o código
div.innerHTML = 'Esperando'
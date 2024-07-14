const endpoint = 'https://69fe5103-12c0-4a89-a546-5ca9ee7bc528-00-uq97wq30hwxi.picard.replit.dev/'
const p = [...document.querySelectorAll('p')]

let dados = { // deixando uma 'variável' em dinâmico
    _disponibilidade:0,
    _qualidade:0,
    _performance:0,
    set valores(val){ // se recebe os valores, então é SET
        this._disponibilidade = val.disponibilidade
        this._qualidade =val.qualidade
        this._performance = val.performance
        p[0].innerHTML = this._disponibilidade
        p[1].innerHTML = this._qualidade
        p[2].innerHTML = this._performance
    },
    get valores(){ // Atribui os valores
        return[this._disponibilidade, this._qualidade, this._performance]
    }
}

//let intervalo = setInterval(()=>{fetch(endpoint).then(res=>res.json()).then(ret=>{dados.valores = ret})},1500)
console.log(dados.valores)
const pessoa = {
    nome:'junio',
    idade: 12,
    curso: 'teste1',
    aulas:{
        aula01:'html',
        aula02:'php'
    }
} // Objeto literal
console.log(pessoa)
// conversão para JSON
const json = JSON.stringify(pessoa)
console.log(json)
// conversão para objeto
const objeto = JSON.parse(json)
console.log(objeto)
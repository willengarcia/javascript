// EXPORTAÇÃO BÁSICA
// const cursos = ['java', 'css', 'php', 'arduino']
// const carros = ['Polo', 'Golf', 'Ônix', 'Chronos']
// export {cursos, carros} // Comando para exportar para o arquivo script

// EXPORTAÇÃO DE TUDO
// const cursos = ['java', 'css', 'php', 'arduino']
// const carros = ['Polo', 'Golf', 'Ônix', 'Chronos']
// export {cursos, carros} // Comando para exportar para o arquivo script

// EXPORTAÇÃO DE CLASSE
// class Cursos{
//     static cursos = [1,2,3,4,5,6,7]
//     constructor(){}
//     static getCursos(){
//         return this.cursos
//     }
//     static getCursoEspecifico(indice){
//         return this.cursos[indice]
//     }
// }
// export default Cursos // Exportação padrão (default)

// Prática exportação
export {contato} // exportando o obj contato
import { contatos } from "./script.js"; // importando o array contatos
let contato = {
    getTodosContatos:function(){
        return contatos
    },
    getContato:function(i){
        return contatos[i]
    },
    addContato:function(novoContato, destinoDOM){
        const div = document.createElement('div')
        div.setAttribute('class', 'dados')
        const pNome = document.createElement('p')
        pNome.innerHTML = novoContato.nome
        const pTelefone = document.createElement('p')
        pTelefone.innerHTML = novoContato.telefone
        const pEmail = document.createElement('p')
        pEmail.innerHTML = novoContato.email
        div.appendChild(pNome)
        div.appendChild(pTelefone)
        div.appendChild(pEmail)
        destinoDOM.appendChild(div)
    }
}
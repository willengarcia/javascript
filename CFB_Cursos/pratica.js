const selecionado = document.querySelector(".se")
const remove = document.querySelector('.re')
const adicionaDepois = document.querySelector('.adDepois')
const adicionaAntes = document.querySelector('.adAntes')
const caixa2 = document.querySelector('.container2')

let indice = 0
const pegaCurso = ()=>{
    const cursos = [...document.querySelectorAll('input')]
    const cursoSelecionado = [...cursos.filter((valor)=>{
        return valor.checked
    })]
    const curso = cursoSelecionado[0]
    return curso
}
const criarCurso = (curso)=>{
    const novoElementoDiv = document.createElement('div')
    const novoElementoInput = document.createElement('input')
    const entrada = document.querySelector('.container1>input').value
    if(entrada == ''){
        alert('Coloque alguma entrada!')
    }else{
        novoElementoDiv.setAttribute('class', 'cursos')
        novoElementoDiv.textContent = entrada
        caixa2.appendChild(novoElementoDiv)
        novoElementoInput.setAttribute('class', 'x')
        novoElementoInput.setAttribute('type', 'radio')
        novoElementoInput.setAttribute('name', 'c')
        novoElementoInput.setAttribute('id', entrada)
        novoElementoDiv.appendChild(novoElementoInput)
        return novoElementoDiv
    }
    
}

selecionado.addEventListener('click',(evento)=>{
    const radioSelecionado = pegaCurso()
    if(radioSelecionado == undefined){
        alert('Nenhum curso selecionado')
    }
    alert(`Curso selecionado ${radioSelecionado.id}`)

})
remove.addEventListener('click',(evento)=>{
    const radioSelecionado = pegaCurso()
    if(radioSelecionado == undefined){
        alert('Nenhum elemento selecionado')
    }else{
        radioSelecionado.parentElement.remove()
    }
    
})
adicionaAntes.addEventListener('click', (evento)=>{
    const dadosCurso = pegaCurso()
    const c = dadosCurso.parentNode // parente próximo do elemento
    const cursoCriado = criarCurso()
    console.log(c.parentNode)
    caixa2.insertBefore(cursoCriado, c) // elemento, parente
    
})
adicionaDepois.addEventListener('click', (evento)=>{
    const dadosCurso = pegaCurso()
    const c = dadosCurso.parentNode.nextSibling // parente próximo do elemento
    const cursoCriado = criarCurso()
    console.log(c.parentNode)
    caixa2.insertBefore(cursoCriado, c) // elemento, parente
    
})
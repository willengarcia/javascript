const divDatagrid = document.querySelector('.dados')
const config  = {
    endpoint:'http://localhost:1880/produtos'
}
const datagridview = (config)=>{
    fetch(config.endpoint)
    .then(res=>res.json())
    .then(res=>{
        res.forEach(el=>{

            const divLinha = document.createElement('div')
            divLinha.setAttribute('class', 'produtos')
            const id = document.createElement('div')
            const produto = document.createElement('div')
            const marca = document.createElement('div')
            const modelo = document.createElement('div')
            const funcoes = document.createElement('div')
            const spanE = document.createElement('span')
            const spanV = document.createElement('span')
            const spanD = document.createElement('span')
            const imgE = document.createElement('img')
            const imgV = document.createElement('img')
            const imgD = document.createElement('img')
            imgE.setAttribute('src', 'editar.png')
            imgV.setAttribute('src', 'visualizar.png')
            imgD.setAttribute('src', 'delete.png')
            id.innerHTML = el.id // Ficar atento no retorno
            produto.innerHTML = el.produto // Ficar atento no retorno
            marca.innerHTML = el.marca // Ficar atento no retorno
            modelo.innerHTML = el.modelo // Ficar atento no retorno
            spanE.appendChild(imgE)
            spanV.appendChild(imgV)
            spanD.appendChild(imgD)

            divLinha.appendChild(id)
            divLinha.appendChild(produto)
            divLinha.appendChild(marca)
            divLinha.appendChild(modelo)
            divLinha.appendChild(funcoes)
            divDatagrid.appendChild(divLinha)
            funcoes.appendChild(spanE)
            funcoes.appendChild(spanV)
            funcoes.appendChild(spanD)

        })
        console.log(res)
        const imagem = [...document.querySelectorAll('img')]
        imagem.forEach((elemento)=>{
            pegaId(elemento)
        })
    })
    .catch((erro)=>{
        console.log(erro)
    })
}
datagridview(config)
function pegaId(el){
    el.addEventListener('click', (tag)=>{
        let tipo = tag.target.attributes[0].nodeValue
        let id = tag.target.parentElement.parentElement.parentElement.firstChild.innerHTML
        let linhaSelecionada = tag.target.parentElement.parentElement.parentElement
        if(tipo == 'delete.png'){
            apagar(id)
            linhaSelecionada.remove()
        }else if(tipo =='editar.png'){
            console.log('Atualizar')
        }else if(tipo =='visualizar.png'){
            console.log('Visualizar')
        }
    })
}
function apagar(id){
    const endpoint = `http://localhost:1880/removeproduto/${id}`
    fetch(endpoint)
    .then(res=>{
        if(res.status == 200){
            console.log('Removido com sucesso')
        }
    })
    .catch(erro=>{
        console.log(erro)
    })
}
import { contato } from "./file.js";
const listaContatos = document.getElementById('lista-contatos')
const botao = document.getElementById('gravar')
botao.addEventListener('click', (evt)=>{
    const cont={
        nome:document.getElementById('Nome').value,
        telefone:document.getElementById('telefone').value,
        email:document.getElementById('email').value
    }
    contato.addContato(cont, listaContatos)
})
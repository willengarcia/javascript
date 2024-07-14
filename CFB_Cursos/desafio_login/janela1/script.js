const endpoint = 'https://69fe5103-12c0-4a89-a546-5ca9ee7bc528-00-uq97wq30hwxi.picard.replit.dev/'
particlesJS.load('particles-container', 'particlesjs-config.json');
const nome = document.getElementById('nome')
const senha = document.getElementById('senha')
const botao = document.getElementById('enviar')

const validaDados =()=>{
    fetch(endpoint)
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
        // if(nome == res.nome && senha == res.senha){
        //     console.log(res.ID)
        // }
    })
}
botao.addEventListener('click', (evt)=>{
    fetch(endpoint)
    .then(res=>res.json())
    .then(res=>{
        if(nome.value == res.nome && senha.value == res.senha){
            alert('Bem vindo, estamos lhe redirecionando para outra página. Seu ID é '+res.ID)
        }else {
            alert('Senha ou Nome errado!')
            nome.style.border = '2px solid red'
            senha.style.border = '2px solid red'
        }
    })
})
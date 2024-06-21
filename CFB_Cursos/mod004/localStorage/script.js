const btn = document.getElementById('btn')
const url = document.getElementById('url')

btn.addEventListener('click', (evt)=>{
    // window.location = 'https://web.telegram.org/a/' // ir para outra página
    // window.location.reload() // recarrega a página
    // window.history.forward() // próxima página que está no histórico
    // window.history.go(1) // naverga pelo numero de pasta do histórico
    window.location = url.value
    console.log(url.value)
})
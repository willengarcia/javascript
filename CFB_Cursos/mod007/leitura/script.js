const p = document.getElementById('texto')
const endPoint = 'arquivo.txt'
fetch(endPoint)
.then(res=>res.json()) // como ele vai ser convertido
.then(res=>{
    console.log(res)
    p.innerHTML = res.canal
})
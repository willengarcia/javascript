const nome = document.getElementById('Nome')
const nota = document.getElementById('nota')
const btn = document.getElementById('btn')
const p = document.getElementById('msg')

btn.addEventListener('click',(evt)=>{
    let msg = null
    if(!nota.checkVisibility()){
        msg = nota.validationMessage+'oi'
    }
    p.innerHTML = msg 
    evt.preventDefault()
})

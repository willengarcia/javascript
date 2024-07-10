const nome = document.getElementById('Nome')
const nota = document.getElementById('nota')
const btn = document.getElementById('btn')
const p = document.getElementById('msg')

btn.addEventListener('click',(evt)=>{
    let msg = nota.validity
    if(msg.valueMissing){
        msg = nota.setCustomValidity('oi')
        console.log(msg)
    }
    p.innerHTML = msg 
    console.log(msg)
    evt.preventDefault()
})

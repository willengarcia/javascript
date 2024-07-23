const canva = document.getElementById('canva')
let contexto = canva.getContext('2d')
let x = 1
let dx = 1
let dy = 1
let y = 1
let anima
function redenrizar(){
    contexto.fillStyle = 'rgb(0,255,0)'
    contexto.clearRect(0,0,500, 500)
    contexto.fillRect(x,y,50,50)
    x+=dx
    y+=dy
    if(x+50>=500){
        dx = -2
    }else if(x<0){
        dx = 3
    }if(y+50>=500){
        dy = -1
    }else if(y<0){
        dy = 3
    }
    anima = requestAnimationFrame(redenrizar)
}
document.body.addEventListener('load',redenrizar())
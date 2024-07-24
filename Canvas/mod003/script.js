const canva1 = document.getElementById('canva1')
let contexto = canva1.getContext('2d')
let anima 
let x = 0
let y = 0
let px = 1
let py = 1
let r = 20
// arcTo() > x1,y1,x2,y2, raio
function desenha() {
    
    contexto.beginPath();
    // Clear the entire canvas to avoid old drawings
    contexto.clearRect(0, 0, canva1.width, canva1.height);
    // Draw the circle
    contexto.arc(x, y, r, 0, Math.PI * 2, false); // 0 to 2*PI to draw a full circle
    contexto.fill();
    contexto.closePath()
    

    x+=px
    y+=py
    if(x+r>=500){
        px = -1
    }else if(x<r){
        px = 2
    }if(y>=500-r){ // baixo
        py = -3
    }else if(y<0+r){ // cima
        py = 4
    }

    // Continue the animation
    requestAnimationFrame(desenha);
}

// Start the animation
desenha();

const canva2 = document.getElementById('canva2')
let ctx = canva2.getContext('2d')
const draw = (evt) => {
    ctx.lineTo(evt.offsetX, evt.offsetY);
    ctx.stroke();
};

canva2.addEventListener('mousedown', (ev) => {
    ctx.moveTo(ev.offsetX, ev.offsetY);
    canva2.addEventListener('mousemove', draw);
});

canva2.addEventListener('mouseup', (ev) => {
    canva2.removeEventListener('mousemove', draw);
});

document.body.addEventListener('dblclick', (e) => {
    ctx.clearRect(0, 0, canva2.width, canva2.height);
});
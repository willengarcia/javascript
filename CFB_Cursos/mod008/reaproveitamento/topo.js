const head = document.head
const body = document.body
const estilo = '<link rel="stylesheet" href="topo.css">'
head.innerHTML+=estilo
const topo = document.createElement('div')
topo.setAttribute("id", "topo")
topo.setAttribute('class', 'topo')
body.prepend(topo)

const logo = 
    "<div id='logo' class='logo'>"+
        "<img src='logo.png' alt='LOGO'>"+
    "<div>"
topo.innerHTML+=logo
const login = 
    "<div id='login' class='login'>"+
            "<p id='mat'>Matrícula:<p>"+
            "<p id='nome'>Nome:<p>"+
    "<div>"
topo.innerHTML+=login
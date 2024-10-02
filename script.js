function ON(){
    document.getElementById("lampada").src = "ligada.png";
    document.body.style.backgroundColor = "black"
}
function OFF(){
    document.getElementById("lampada").src = "desligada.png";
    document.body.style.backgroundColor = "white"
}
function QUEBRA(){
    document.getElementById("lampada").src = "quebrada.png";
    document.body.style.backgroundColor = "white"
}
function PISCA(){
    let intervalo = 0;
    let contador = 0;
    while (contador < 10) {
        intervalo +=1000;
        setTimeout(function(){
            document.getElementById("lampada").src = "ligada.png";
            document.body.style.backgroundColor = "black"
        }, intervalo)

        intervalo +=1000;
        setTimeout(function(){
            document.getElementById("lampada").src = "desligada.png";
            document.body.style.backgroundColor = "white"
        }, intervalo)
        contador++;
    }
}
let lampada = document.getElementById('lampada');

lampada.addEventListener('mouseover', ON);
lampada.addEventListener('mouseleave', OFF);
lampada.addEventListener('dblcick', QUEBRA);
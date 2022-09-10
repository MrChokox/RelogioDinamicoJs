const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let s = dateToday.getSeconds()

    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(s < 10) s = '0' + s;

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = s

    carregar();
})

function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = "fotoManha.jpg"
        document.body.style.background = "rgb(170 181 191)"
    }else if(hora >= 12 && hora < 18){
        //BOA TARDE 
        img.src = "fotoTarde.jpg"
        document.body.style.background = "rgb(223 184 54)"
    }else{
        //BOA NOITE 
        img.src = "fotoNoite.jpg"
        document.body.style.background = "rgb(22 51 112)"
    }
}
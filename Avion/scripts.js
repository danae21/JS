var jugador = {
    left:450,
    top:620
};


//ARRREGO QUE DIBUJA A LOS ENEMIGOS
var enemigos = [
    {left:100, top:50},
    {left:200, top:250},
    {left:300, top:150},
    {left:400, top:350},
    {left:500, top:150},
    {left:600, top:250},
    {left:700, top:50}

]

var misiles = [];

function dibujar_jugador(){
    content = "<div class= 'jugador' style='left:"+jugador.left+"px; top:"+jugador.top+"px'></div>"
    document.getElementById('jugadores').innerHTML = content;
}


function dibujar_enemigo(){
    content = "";
    console.log(enemigos)
        for(index=0; index<enemigos.length; index++){
            content += "<div class= 'enemigo' style='left:"+enemigos[index].left+"px; top:"+enemigos[index].top+"px'></div>"
    }
    document.getElementById('enemigos').innerHTML = content;
}

function dibujar_misil(){
    content = "";
    for(index=0; index<misiles.length; index++){
        content += "<div class='misil' style='left:"+misiles[index].left+"px; top:"+misiles[index].top+"px'></div>"
    }
    document.getElementById('misiles').innerHTML = content;

}


function mover_enemigos(){
    for(index=0; index<enemigos.length; index++){
        enemigos[index].top = enemigos[index].top + 5;
    }
}

function mover_misiles(){
    for(index=0; index<misiles.length; index++){
        misiles[index].top = misiles[index].top - 60;
    }
}

document.onkeydown = function(e){

    // KEYCODE 37 REPRESTENTA LA TECLA IZQUIERA.
    //SI ES 37 MUEVE A LA IZQUIERA.
    if(e.keyCode == 37 && jugador.left > 0){ 
        jugador.left = jugador.left -10;
    }

    // KEYCODE 39 REPRESTENTA LA TECLA DERECHA.
    //SI ES 39 MUEVE A LA DERECHA.
    if(e.keyCode == 39 && jugador.left <= 830){ 
        jugador.left = jugador.left +10;
    }

    // KEYCODE 38 REPRESTENTA LA TECLA ABAJO.
    //SI ES 38 MUEVE A LA ABAJO.
    if(e.keyCode == 38 && jugador.top > 500){
        jugador.top = jugador.top -10;
    }

    // KEYCODE 40 REPRESTENTA LA TECLA ARRIBA.
    //SI ES 40 MUEVE A LA ARRIBA.
    if(e.keyCode == 40 && jugador.top <= 600){
        jugador.top = jugador.top +10;
    }


    // KEYCODE 32 REPRESTENTA LA TECLA ESPACIO.
    //SI ES 32 DISPARA MISIL.
    //* SI CAMBIAS EL KEYCODE NO BAJARÁ LA PANTALLA, CAMBIA EL CODE.
    if(e.keyCode == 32 ) { // fuego
        misiles.push({left: (jugador.left+34), top: (jugador.top-8)})
        dibujar_misil();
    }
    console.log(misiles);
    

}

//LOOP PARA ACTUALIZAR LA FRECUENCIA DEL JUEGO.
 
function loop_juego(){
    console.log("Funciona!")
    
    dibujar_jugador();
    mover_enemigos();
    dibujar_enemigo();
    mover_misiles()
    dibujar_misil();

    setTimeout(loop_juego, 100);
}


loop_juego();




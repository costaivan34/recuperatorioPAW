function cambia_color(){ 
    window.onload = function () {
        var elementos = document.getElementById("tabla").getElementsByTagName("td");
            for (var i=0;i < elementos.length; i++)  { 
                var nota=elementos[i].getElementsByClassName("promedio")[0];
                if(nota>7){
                    //verde
                    elementos[i].classList.add("verde");
                    document.appendChild(elementos[i]);
                }else if(nota>1 && nota<4){
                    //rojo
                    elementos[i].classList.add("rojo");
                    document.appendChild(elementos[i]);
                }else if(nota>3 && nota<7){
                    //amarillo
                    elementos[i].classList.add("amarillo");
                    document.appendChild(elementos[i]);
                }
                    
                }
         
        }









    celda = document.getElementById("celda" + document.fcolor.celda.value); 
    celda.style.backgroundColor=document.fcolor.micolor.value ;
 }
 
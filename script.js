 var aleatorio; 
 var contador = 0;
 function generaLista() {  
     aleatorio = Math.floor((Math.random()*100)+1);
         var i = 1;
         var option=""; // genero la lista desplegable con un bucle for
         for (i; i <=80; i++){
             {option += '<option value="'+ i + '">'+ i +'</option>';}
             document.getElementById("intentos").innerHTML = option;
          }

    }
            // si el dato introducido es letra o mayor que 101 dará error y borrará el dato introducido para que no se pueda introducir dichos datos.
function validarNumero(numero){
      if  (!/^([0-9])*$/.test(numero) || numero > 100 || numero == 0) // Valores entre 1 y 100 
          {alert("Solo Dátos Numéricos [1-100]");document.getElementById("numero").value = "";}
     }
            
function comparar() { // Función para comprobar los datos introducidos y generados
        intentos = parseInt(document.getElementById("intentos").value); 
            var respuesta = parseInt(document.getElementById("numero").value);
                
            if (aleatorio < respuesta){// Si el numero generado es menor que el introducido incrementa en 1 el contador
             
                document.getElementById("res").innerHTML ="El número generado es <strong>MENOR</strong> al introducido";
                contador++;
                document.getElementById("contador").style.display = "block";
         }
            else if (aleatorio > respuesta){// Si el numero generado es mayor que el introducido incrementa en 1 el contador
                    
                document.getElementById("res").innerHTML ="El número generado es <strong>MAYOR</strong> al introducido";
                contador++;
                document.getElementById("contador").style.display = "block";
         }
            else if (document.getElementById('numero').value==""){// Si el numero introducido esta vacío no se pierde el intento ya que no se incrementa el contador
                     
                document.getElementById("res").innerHTML ="Debe ingresar un número del 1 al 100";
                document.getElementById("contador").style.display = "none"
        }
            else if (aleatorio = respuesta){ // Si se acierta es decir si el introducido es igual al generado
                 document.getElementById("res").innerHTML ="<h1>ENHORABUENA!!!</h1> <br/> Acertaste en el<strong> " + ((contador)+1) + "º</strong> intento" + " con <strong>" + intentos + " </strong> oportunidades";
                 boton.style.display = "none";
                 document.getElementById("intRestantes").style.display = "none";
                 document.getElementById("contador").style.display = "none";
                 document.getElementById("nualeatorio").innerHTML = "El número aleatorio generado por el navegador es el <strong>"+aleatorio+"</strong>";
                 contador++;
         }
                 document.getElementById("contador").innerHTML ="Intento nº <strong>"+ contador+"</strong>";
                 document.getElementById("noAcertado").innerHTML ="Has finalizado en el intento nº <strong>"+ ((contador)+1)+"</strong>";
            if(contador == intentos && aleatorio != respuesta ){//si el contador es igual a los intentos y no se ha acertado
                
                document.getElementById("resultado").innerHTML ="<h1>PERDISTES!!!</h1> <br/> No has conseguido averiguarlo en <strong> "+ intentos +"</strong> intento/s";boton.style.display = "none";
                document.getElementById("contador").style.display = "none";
                document.getElementById("res").style.display = "none";
                document.getElementById("intRestantes").style.display = "none";
                document.getElementById("nualeatorio").innerHTML = "El número aleatorio generado por el navegador es el <strong>"+aleatorio+"</strong>"; 
         }
                if (intentos = 1) { //Si solo se va a realizar 1 intento
                
            document.getElementById("intentos").style.display = "none";
            document.getElementById("descintentos").style.display = "none"; 
        }
 }
            // Esta función borra el número introducido del input cuando se pulsa el boton y oculta la entrada de intentos al hacer el primer click en "comprueba si aciertas"
           function borraInput(){
            document.getElementById("numero").value = ""; 
           }
            function oculta() {
            document.getElementById("intentos").style.display = "none";
            document.getElementById("descintentos").style.display = "none";   
            }
            function muestraIntentos() {
            intentos = parseInt(document.getElementById("intentos").value);
            document.getElementById("intRestantes").innerHTML ="Intentos disponibles : <strong>"+ intentos + "</strong>" ;
            document.getElementById("intRestantes").onclick = intentos;
                console.log(intentos)
            }

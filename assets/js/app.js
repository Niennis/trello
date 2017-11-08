window.onload = function(){

    /* LLAMANDO ELEMENTOS */
    var addList = document.getElementById('lista'); /*Texto que desaparece*/
    var form = document.getElementById('form');/* Form que reemplaza al texto */


    var guardar = document.getElementById('guardar'); /* Boton Guardar */
    var cancel = document.getElementsByClassName('cancel')[0]; /* Boton Cancelar */
    var newList = document.getElementById('getList'); /* input = nombre de lista */
    var container = document.getElementById('lists'); 


    /* CREANDO ELEMENTOS */
    var listDiv = document.createElement('div'); /* Div de lista hecha */
   /* var formList = document.createElement('form');*/
    var listName = document.createElement('p'); /* Nombre de la lista */
    var addCard = document.createElement('p'); /* Añadir una tarjeta... */
    addCard.textContent = 'Añadir una tarjeta...'


/* FUNCION PARA CAMBIAR DE TEXTO A LISTA */
    addList.onclick = function(){
        addList.style.display='none';
        form.style.display='inline-block';
    }
    
/* FUNCIÓN PARA AGREGAR NOMBRE DE LISTA Y DESPLEGAR MENU DE TARJETAS */
    guardar.onclick = function(){
        if (newList.value == ''){
          /*  guardar.disabled = true;*/

        }else{
            /*guardar.disabled = false;*/

            listName.textContent = newList.value;
            listDiv.appendChild(listName);
            listDiv.appendChild(addCard);
            container.appendChild(listDiv);
            listDiv.id='boxList';
        }
    }

    cancel.onclick = function(){
        addList.style.display='block';
        form.style.display='none';
    }

}




/* FAAAANNYYYY ASÍ SE AGREGAN LOS STYLE, CON SIGNO IGUAL, 
NO PARÉNTESIS!!!!*/

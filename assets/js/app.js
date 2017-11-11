window.onload = function(){
    
// Llamando elementos principales
    var section_content = document.getElementById('content');
    var div_board = document.getElementById('board');
    var btn_principal = document.getElementById('btn_principal');
    
    btn_principal.addEventListener('click', function(){

        
// CREAR DIV CREADOR DE LISTAS, CON LOS SIGUIENTES ELEMENTOS
    //crear input de lista, boton guardar, boton cancelar
    //dar atributos a cada elemento

        var div_create_list = document.createElement('div');
            div_create_list.setAttribute('class','div_create_list');
        var input_list = document.createElement('input');
            input_list.setAttribute('class','input_list');
            input_list.setAttribute('placeholder','Añadir una lista...');
        var btn_save_list = document.createElement('button');
            btn_save_list.setAttribute('class','btn_save_list');
        var text_btn_save_list = document.createTextNode('Guardar');
        var btn_cancel_list= document.createElement('button');
            btn_cancel_list.setAttribute('class','btn_cancel_list');
        var icon_btn_cancel_list = document.createElement('i');
            icon_btn_cancel_list.setAttribute('class','fa fa-times fa-2x');
            icon_btn_cancel_list.setAttribute('aria-hidden','true');
        input_list.value;
// Asignando padres... brace yourselves...
        btn_save_list.appendChild(text_btn_save_list);
        btn_cancel_list.appendChild(icon_btn_cancel_list);

        div_create_list.appendChild(input_list);
        div_create_list.appendChild(btn_save_list);
        div_create_list.appendChild(btn_cancel_list);

        div_board.insertBefore(div_create_list,btn_principal);

        btn_principal.style.display='none';

        // FUNCION PARA GUARDAR LISTA

        btn_save_list.addEventListener('click',function(){
            
            // Llamar elementos necesarios
            // Crear elementos y atributos
            var div_list = document.createElement('div');
                div_list.setAttribute('class','div_list');

            var name_list = document.createElement('p');
                name_list.setAttribute('id','name_list');
                name_list.setAttribute('class','name_list');
            var text_name_list = document.createTextNode(input_list.value);
            name_list.appendChild(text_name_list);
            
            var menu_list = document.createElement('button');                
            var text_menu_list = document.createTextNode('...');
            menu_list.setAttribute('class','menu_list')
            menu_list.appendChild(text_menu_list);
            
            var add_card = document.createElement('a');
                add_card.setAttribute('class','add_card');
            var text_add_card = document.createTextNode('Añadir una tarjeta...')
            add_card.appendChild(text_add_card);
            
            // Asignar padres... brace yourselves 2.0

            div_list.appendChild(name_list);
            div_list.appendChild(menu_list);
            div_list.appendChild(add_card);
            
            div_board.insertBefore(div_list,div_create_list);

            input_list.value='';
            div_create_list.style.display='none';
            btn_principal.style.display='inline-block';
            
            add_card.addEventListener('click',function(){
                //Crear elementos y asignarles atributos
                //Lista, botón añadir, boton cancelar, boton menú
                var create_card = document.createElement('textarea');
                create_card.setAttribute('class','create_card');
                create_card.value;

                var btn_add_card = document.createElement('button');
                var text_btn_add_card = document.createTextNode('Añadir');
                btn_add_card.appendChild(text_btn_add_card);

                var btn_cancel_card = document.createElement('button');
                var text_btn_cancel_card = document.createElement('i');
                text_btn_cancel_card.setAttribute('class','fa fa-times');
                text_btn_cancel_card.setAttribute('aria-hidden','true');
                btn_cancel_card.appendChild(text_btn_cancel_card);
                
                var btn_menu_add_card = document.createElement('button');
                var text_btn_menu_add_card= document.createTextNode('...')
                btn_menu_add_card.appendChild(text_btn_menu_add_card);

                // Agregar elementos

                div_list.appendChild(create_card);
                div_list.appendChild(btn_add_card);
                div_list.appendChild(btn_cancel_card);
                div_list.appendChild(btn_menu_add_card);
                
                btn_add_card.addEventListener('click',function(){
                    var card = document.createElement('div');
                    var name_card = document.createElement('p')
                    var text_card = document.createTextNode(create_card.value);

                    name_card.appendChild(text_card);
                    card.appendChild(name_card)

                    var pencil = document.createElement('i');
                    pencil.setAttribute('class','fa fa-pencil');
                    pencil.setAttribute('aria-hidden','true');
                    card.appendChild(pencil);

                    div_list.insertBefore(card,create_card);
                    create_card.value='';
                    add_card.style.display='none';

                })
            })
        })
    })
}

let button = document.getElementById('button');
let items = document.querySelectorAll('.item-toggle');
let nav = document.querySelector('nav');

button.addEventListener('click', function(){

    if(button.className == 'nav-toggle active'){

        button.className = 'disable'        

        nav.style.flex = .8;

        for(let item of items){
            item.setAttribute('hidden', true)
        }
    }
    else {

        button.className = 'nav-toggle active'
        i = 0;

        nav.style.flex = 4;

        for(let item of items){
            item.removeAttribute('hidden');
        }
    }  
})

function changeScreen(value){
    
    switch(value){
        case 'search':
            changeActive(value);
            document.getElementById('page-name').innerHTML = 'Buscar';
            break;
        case 'dashboard':
            changeActive(value);
            document.getElementById('page-name').innerHTML = 'Dashboard';
            break;
        case 'pets':
            changeActive(value);
            document.getElementById('page-name').innerHTML = 'Pets';
            break;   
        case 'clients':
            changeActive(value);
            document.getElementById('page-name').innerHTML = 'Clientes';
            break;   
        case 'vets':
            changeActive(value);
            document.getElementById('page-name').innerHTML = 'Vets';
            break;   
        case 'settings':
            changeActive(value);
            document.getElementById('page-name').innerHTML = 'Ajustes';
            break;                    
    }
}

function changeActive(field) {
    document.querySelector('.nav-item-active').className = '';
    document.getElementById(field).className = 'nav-item-active';
}


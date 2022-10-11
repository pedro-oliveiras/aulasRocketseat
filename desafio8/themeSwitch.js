//let button = document.querySelector('.ball');
let button = document.getElementById('ball');
//let container = document.querySelector('.content');

let container = document.getElementById('content');
let background = document.getElementById('background');
let sun = document.getElementById('sun-img');
let moon = document.getElementById('moon-img');

button.addEventListener('click', function(){
    
    if(moon.hasAttribute('hidden')){

        sun.setAttribute('hidden', true);
        moon.removeAttribute('hidden');
        button.style.order = 1;
        background.style.backgroundColor = '#292C35';
    }
    else {
        moon.setAttribute('hidden', true);
        sun.removeAttribute('hidden');
        button.style.order = 0;
        background.style.backgroundColor = '#F1F1F1';
    }
})

/*if(container.style.justifyContent == ''){
    container.style.justifyContent = 'flex-start';
}

button.addEventListener('click', function(){    
    
    if(container.style.justifyContent == 'flex-start'){
        container.style.justifyContent = 'flex-end';
        background.style.backgroundColor = '#dfdfdf';
    }
    else {
        container.style.justifyContent = 'flex-start';
        background.style.backgroundColor = '#252525';
    }
});*/
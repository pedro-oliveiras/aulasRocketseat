//let button = document.querySelector('.ball');
let button = document.getElementById('ball');
//let container = document.querySelector('.content');

let container = document.getElementById('content');
let background = document.getElementById('background');

if(container.style.justifyContent == ''){
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
});
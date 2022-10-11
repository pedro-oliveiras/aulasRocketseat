let eye = document.querySelector('.eye');

eye.addEventListener('click', function() {

    let field = document.querySelector('#password');

    if(field.getAttribute('type') == 'password'){
        eye.innerHTML = '<img src="./images/mail.svg" alt="">';
        field.setAttribute('type', 'text');
    }
    else {
        eye.innerHTML = '<img src="./images/eye.svg" alt="">';
        field.setAttribute('type', 'password');
    }    
})
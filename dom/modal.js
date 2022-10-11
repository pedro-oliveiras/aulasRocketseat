let botao = document.getElementById('botao')
//console.log(element)
botao.addEventListener('click', popUpModal)

function popUpModal() {

    let botao = document.getElementById('botao')
    botao.setAttribute('hidden', true)

    let main = document.querySelector('main')
    main.style.backgroundColor = 'rgba(138, 138, 138, 0.800)'

    let modal = document.getElementById('modal')
    modal.style.display = 'flex'
}

document.addEventListener('keydown', function(event) {
    let key = event.key === 'Escape'

    if (key){
        popOutModal()
    }
})

function popOutModal() {

    let modal = document.getElementById('modal')
    modal.style.display = 'none'

    let main = document.querySelector('main')
    main.style.backgroundColor = 'rgb(240, 248, 255)'

    let botao = document.getElementById('botao')
    botao.removeAttribute('hidden')

}
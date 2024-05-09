// index
let nMesaInput = document.querySelector('#nMesa')

let btnContinuar = document.querySelector('#btnContinuar')
let btnPedidos = document.querySelector('#btnPedidos')
let divErro = document.querySelector('#erro')

function validacao() {

    let nMesa = parseFloat(nMesaInput.value)

    removeClass()

    if (isNaN(nMesa) || nMesa <= 0) {
        divErro.classList.add('alert')
        divErro.classList.add('alert-danger')
        divErro.innerHTML = 'Número da mesa inválido!'
    } else {
        divErro.classList.add('alert')
        divErro.classList.add('alert-success')
        divErro.innerHTML = 'Pedido criado!'
    }

}

function removeClass() {
    divErro.classList.remove('alert')
    divErro.classList.remove('alert-danger')
    divErro.classList.remove('alert-success')
}

btnContinuar.addEventListener('click', validacao)

// pages

//para visualizar as senhas do cadastro
let btn = document.querySelector('#eye2')
let btnConfirm = document.querySelector('#eye3')

btn.addEventListener('click',()=>{
    let inputSenha = document.querySelector('#isenha2')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

btnConfirm.addEventListener('click',()=>{
    let inputConfirmSenha = document.querySelector('#iconfirmsenha')

    if(inputConfirmSenha.getAttribute('type') == 'password'){
        inputConfirmSenha.setAttribute('type', 'text')
    } else {
        inputConfirmSenha.setAttribute('type', 'password')
    }
})

//trocando o simbolo de visualização
let btnSenha2 = document.querySelector('#eye2')
let btnConfirm2 = document.querySelector('#eye3')

btnSenha2.addEventListener('click',() => {
    let eyeSenha2 = document.querySelector('.material-icons')
    
    if(eyeSenha2.innerHTML == 'visibility_off'){
        eyeSenha2.innerHTML = 'visibility'
    } else {
        eyeSenha2.innerHTML = 'visibility_off'
    }

})

btnConfirm2.addEventListener('click', () => {
    let eyeConfirm = document.querySelector('.eyeview')

    if(eyeConfirm.innerHTML == 'visibility_off'){
        eyeConfirm.innerHTML = 'visibility'
    } else {
        eyeConfirm.innerHTML = 'visibility_off'
    }

})

//para visualizar a senha do login
let btnSenha = document.querySelector('#eye')

btnSenha.addEventListener('click',()=>{
    let inputSenha = document.querySelector('#isenha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

//trocando o simbolo de visualização
let btnSenha1 = document.querySelector('#eye')

btnSenha1.addEventListener('click',() => {
    let eyeSenha1 = document.querySelector('.eyereg')
    
    if(eyeSenha1.innerHTML == 'visibility_off'){
        eyeSenha1.innerHTML = 'visibility'
    } else {
        eyeSenha1.innerHTML = 'visibility_off'
    }

})
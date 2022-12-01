//validaçao do dados de cadastro
let nome = document.querySelector('#inome')
let labelnome = document.querySelector('#labelnome')

let senha = document.querySelector('#isenha2')
let labelsenha = document.querySelector('#labelsenha')

let confirmSenha = document.querySelector('#iconfirmsenha')
let labelconfirmSenha = document.querySelector('#labelconfirmsenha')

nome.addEventListener('keyup',() => {
    if(nome.value.length <= 2){
        labelnome.innerHTML = '<strong>Insira no mínimo 3 caracteres</strong>'
        labelnome.setAttribute('style','color: #ff3f3f')
        nome.setAttribute('style','color: red')
    } else {
        labelnome.innerHTML = '<strong>Nome</strong>'
        labelnome.setAttribute('style','color: #47eb47')
        nome.setAttribute('style','color: black')
    }
})

senha.addEventListener('keyup',() => {
    if(senha.value.length <= 7){
        labelsenha.innerHTML = '<strong>Insira no mínimo 8 caracteres</strong>'
        labelsenha.setAttribute('style','color: #ff3f3f')
        senha.setAttribute('style','color: red')
    } else {
        labelsenha.innerHTML = '<strong>Senha</strong>'
        labelsenha.setAttribute('style','color: #47eb47')
        senha.setAttribute('style','color: black')
    }
})

confirmSenha.addEventListener('keyup',() => {
    if(confirmSenha.value != senha.value ){
        labelconfirmSenha.innerHTML = '<strong>Senhas diferentes</strong>'
        labelconfirmSenha.setAttribute('style','color: #ff3f3f')
        confirmSenha.setAttribute('style','color: red')
    } else {
        labelconfirmSenha.innerHTML = '<strong>Confirmar Senha</strong>'
        labelconfirmSenha.setAttribute('style','color: #47eb47')
        confirmSenha.setAttribute('style','color: black')
    }
})

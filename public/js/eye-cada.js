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

let campos = document.querySelectorAll('.campo2');

for(let i = 0; i < campos.length; i++) {
    const element = campos[i];

    const eyeIcon = element.querySelector('.material-icons');

    if(!eyeIcon) continue;

    eyeIcon.addEventListener('click', () => {
        if(eyeIcon.innerHTML == 'visibility_off'){
            eyeIcon.innerHTML = 'visibility'
        } else {
            eyeIcon.innerHTML = 'visibility_off'
        }
    });

}


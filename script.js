const validarEmail = document.getElementById('headerEmail');

const validarSenha = document.getElementById('senha');

const buttonEntrar = document.getElementById('buttonEntrar');

function validar() {
  if (validarEmail.value === 'tryber@teste.com' && validarSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonEntrar.addEventListener('click', validar);

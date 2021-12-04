const validarEmail = document.getElementById('headerEmail');

const validarSenha = document.getElementById('senha');

const buttonEntrar = document.getElementById('buttonEntrar');

// Valida Email e Senha.
function validar() {
  if (
    validarEmail.value === 'tryber@teste.com' && validarSenha.value === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonEntrar.addEventListener('click', validar);

document.getElementById('agreement').addEventListener('click', (event) => {
  document.getElementById('submit-btn').disabled = false;

  if (event.target.checked === false) {
    document.getElementById('submit-btn').disabled = true;
  }
});

/** https://cursos.alura.com.br/forum/topico-habitar-desabilitar-botao-65202
https://www.horadecodar.com.br/2020/07/28/como-verificar-se-um-checkbox-esta-checado-c-javascript-ou-jquery/
https://www.w3schools.com/jsref/prop_checkbox_checked.asp
https://qastack.com.br/programming/3014649/how-to-disable-html-button-using-javascript */

const displayCaracteresDecremento = document.querySelector('#counter');
const textArea = document.getElementsByTagName('textarea')[0];

textArea.addEventListener('keyup', (event) => {
  const decremento = event.target.maxLength - event.target.textLength;
  displayCaracteresDecremento.innerHTML = `máximo ${decremento}`;
});

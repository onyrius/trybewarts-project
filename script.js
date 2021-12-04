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

// Cria display demonstrativo do decremento de caracteres
const displayCaracteresDecremento = document.querySelector('#counter');
const textArea = document.getElementsByTagName('textarea')[0];

textArea.addEventListener('keyup', (event) => {
  const decremento = event.target.maxLength - event.target.textLength;
  displayCaracteresDecremento.innerHTML = `máximo ${decremento}`;
});

/** Source https://www.youtube.com/watch?v=LiQcxaC2Ek4&ab_channel=WebdesignemFoco */

//
/* Todos os campos do formulário devem ser substituídos.
Deve haver um campo com o formato "Nome: Alguem Aqui"
Deve haver um campo com o formato "Email: email@mail.com"
Deve haver um campo com o formato "Casa: Casa Escolhida"
Deve haver um campo com o formato "Família: Família Escolhida"
Deve haver um campo com o formato "Matérias: Matérias, Marcadas, Aqui"
Deve haver um campo com o formato "Avaliação: NotaAqui"
Deve haver um campo com o formato "Observações: Observações aqui" */

// const formulario = document.getElementsByTagName('form')[0];
// console.log(formulario);
// formulario.addEventListener('click',escolher);

// function escolher () {
// }

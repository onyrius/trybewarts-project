const validarEmail = document.getElementById('email');

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

// function avaliar(event) {
//   return event.target.value;
// }
// function imprimirObs() {
//   const obs = document.querySelector('#textarea');
//   console.log(obs.value);
//   return obs.value;
// }
// const formAvaliacao = document.querySelector('#evaluation-form');

// formAvaliacao.addEventListener('click', avaliar);
// formAvaliacao.addEventListener('keypress', imprimirObs);

/** Source https://www.w3schools.com/jsref/prop_select_selectedindex.asp
 * https://github.com/tryber/sd-018-b-project-trybewarts/pull/87/files
 */

// construindo objeto
// let dadosDoFormulario = {
//   Nome: '',
//   Email: '',
//   Casa: '',
//   Família: '',
//   Matérias: '',
//   Avaliação: '',
//   Observações: '',
// };
// ------ Defeinindo nome ---------
// function defenirNome() {
//   const nomePrimeiro = document.querySelector('#input-name').value;
//   const nomeUltimo = document.querySelector('#input-lastname').value;
//   const nomeCompleto = `${nomePrimeiro} ${nomeUltimo}`;
//   console.log(`Nome: ${nomeCompleto}`);
//   return `Nome: ${nomeCompleto}`;
// }
// defenirNome();
// formAvaliacao.addEventListener('keyup', defenirNome);

// -------definindo email --------
// function capturarDadosDoEmail() {
//   const email = document.querySelector('#input-email').value;
//   console.log(`Email: ${email}`);
//   return `Email: ${email}`;
// }
// formAvaliacao.addEventListener('keyup', capturarDadosDoEmail);

// ------definindo casa ----------
// function selecionarCasa() {
//   const casasParaSelecionar = document.querySelector('#house').options;
//   let casaEscolhida = '';
//   for (let index = 0; index < casasParaSelecionar.length; index += 1) {
//     if (casasParaSelecionar.selectedIndex === index) {
//       casaEscolhida = casasParaSelecionar[index].innerText;
//       console.log(`Casa: ${casaEscolhida}`);
//       return `Casa: ${casaEscolhida}`;
//     }
//   }
// }
// formAvaliacao.addEventListener('change', selecionarCasa);

// ------definindo Familia -------
// const familiaBox = document.querySelector('.side-by-side-column');

// function selecionarFamilia(event) {
//   const casaFamilia = event.target.value;
//   console.log(`Família: ${casaFamilia}`);
//   return `Família: ${casaFamilia}`;
// }
// familiaBox.addEventListener('click', selecionarFamilia);

// // ------definindo materias ---------
// function verificarMateriasSelecionadas() {
//   const materias = document.querySelectorAll('input[type=checkbox]:checked');
//   console.log(materias);
//   for (let index = 0; index < materias.length; index += 1) {
//     let materiaSelecionada = materias[index].value;

//     console.log(materiaSelecionada);
//     let materia = [];
//     materia.push(materiaSelecionada);
//     console.log(materia);
//   }
// }

// formAvaliacao.addEventListener('click', verificarMateriasSelecionadas);
// --------definindo avaliação -------

// --------definindo observações -----

// retornando informações do formulário

// function submeter(event) {
//   event.preventDefault();
//   const formAvaliacao = document.querySelector('#evaluation-form');
//   console.log('depois do prevent');
//   formAvaliacao.innerText = ' ';
//   const dadosDoFormulario = document.createElement('p');
//   dadosDoFormulario.innerText = `${defenirNome}
//   ${capturarDadosDoEmail}
//   ${selecionarCasa}
//   ${selecionarFamilia()}
//   `;
//   formAvaliacao.appendChild(dadosDoFormulario);
// }

// const botaoSubmeter = document.querySelector('#submit-btn');
// botaoSubmeter.addEventListener('click', submeter);

/** Source https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects; */
// https://github.com/tryber/sd-018-b-project-trybewarts/pull/102/files

function submeterForm() {
  const formInicial = document.querySelector('#evaluation-form');
  formInicial.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(formInicial);
    const subjects = formData.getAll('subject');
    const fullName = `Nome: ${formData.get('name')} ${formData.get('lastName')}`;
    const observacoesForms = `Observações: ${formData.get('textObs')}`;
    document.querySelector('#input-name').innerHTML = fullName;
    document.querySelector('#input-lastname').innerHTML = '';
    console.log();
    document.querySelector('#input-email').innerHTML = `Email ${formData.get('inputEmail')}`;
    document.querySelector('#house').innerHTML = `Casa: ${formData.get('house')}`;
    document.querySelector('.side-by-side-column').innerHTML = `Família: ${formData.get('family')}`;
    document.querySelector('#input-subject').innerHTML = `Matérias: ${subjects.join(', ')}`;
    document.querySelector('#input-avaliacao').innerHTML = `Avaliação: ${formData.get('rate')}`;
    document.querySelector('#textarea').innerHTML = observacoesForms;
  });
}
submeterForm();

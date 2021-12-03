const validarEmail = document.getElementById("headerEmail");

const validarSenha = document.getElementById("senha");

const buttonEntrar = document.getElementById("buttonEntrar");

// Valida Email e Senha.
function validar() {
  if (
    validarEmail.value === "tryber@teste.com" &&
    validarSenha.value === "123456"
  ) {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
}

buttonEntrar.addEventListener("click", validar);

//function Habilitarbotão() {
// //Esta função verifica se a caixa checkbox esta selecionada

// const checkbox = document.getElementById('agreement');

// if(checkbox.checked) {
//     checkbox = "yesAgreement"
// } else {
//    checkbox = "notAgreement"
//    console.log(checkbox)
// }
// //desabilita o botão no início
// document.getElementById("submit-btn").disabled = true;

// //cria um event listener que escuta mudanças no input
// document
//   .getElementById("submit-btn")
//   .addEventListener("checked", function (event) {
//     //busca conteúdo do input
//     var conteudo = document.getElementById("input").value;

//     //valida conteudo do input
//     if (checkbox === "yesAgreement") {
//       //habilita o botão
//       document.getElementById("submit-btn").disabled = false;
//     } else {
//       //desabilita o botão se o conteúdo do input ficar em branco
//       document.getElementById("submit-btn").disabled = true;
//     }
//   });
// }
//
function check() {
    document.getElementById('submit-btn').disabled = true;
    document.getElementById('submit-btn').addEventListener('click', function(event){
    
      if (document.getElementById('agreement').checked = true) {
        document.getElementById('submit-btn').disabled = false;
      }  
   }
}

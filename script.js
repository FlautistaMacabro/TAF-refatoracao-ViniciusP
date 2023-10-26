/* Conforme explicado no enunciado adicione as palavras reservadas let ou const nas variaveis */

let distance = 25000;
let time = 710;
let gender = "male";
let pushUps = 40;
let abs = 35;

/* 

    Importante:
    Se o genero (gender) for masculino, utilize a palavra "male"
    Se o genero (gender) for feminino, utilize a palavra "female"

    Sugestão para começar: 

    if(gender === 'male)
    ...

*/

// ------- Funções de Validação dos dados ------- //

function isDistanceValid(distance){
  if(distance >= 24000)
    return true;
  return false;
}

// Para os parâmetros MASCULINOS

function isMascTimeValid(time){
  if(time < 720)
    return true;
  return false;
}

function isMascPushUpsValid(pushUps){
  if(pushUps >= 30)
    return true;
  return false;
}

function isMascAbsValid(abs){
  if(abs >= 35)
    return true;
  return false;
}

// Para os parâmetros FEMININOS

function isFemnTimeValid(time){
  if(time < 840)
    return true;
  return false;
}

function isFemnPushUpsValid(pushUps){
  if(pushUps >= 20)
    return true;
  return false;
}

function isFemnAbsValid(abs){
  if(abs >= 30)
    return true;
  return false;
}

// ------- Função de Impressão em caixa alta ------- //

function showMessage(message){
  console.log(message.toUpperCase());
}

// ------- Função de Teste ------- //

function testTAF(distance, time, gender, pushUps, abs) {
  passed = false;

  //Sua logica deve ser inserida aqui:

  // Verificando se a distância mínima foi alcançada pela pessoa
  if(isDistanceValid(distance)){
    // Verificando se o gênero é masculino
    if(gender === "male"){
      // Verificando se as exigências mínimas para aqueles do gênero masculino foram compridas
      if(isMascTimeValid(time) && isMascPushUpsValid(pushUps) && isMascAbsValid(abs))
        passed = true;
    // Verificando se o gênero é feminino
    }else if(gender === "female"){
      // Verificando se as exigências mínimas para aqueles do gênero feminino foram compridas
      if(isFemnTimeValid(time) && isFemnPushUpsValid(pushUps) && isFemnAbsValid(abs))
        passed = true;
    }
  }

  // Retorno da variavel passed onde para o candidato passar ele deve ter o valor de: true
  return passed;
}

//para executar o script no terminal digite: node ./script.js
//para executar os testes no terminal digite: node --test ./test_cases.js

showMessage(
  `Candidato passou no teste?: \nresposta: ${testTAF(distance, time, gender, pushUps, abs)}`
);

module.exports = testTAF;

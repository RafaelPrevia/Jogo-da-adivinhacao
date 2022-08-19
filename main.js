/* Aplicando a lógica do jogo */

const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

/* Simplificando variáveis */
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

function handleTryClick(event) {
  /* Ao clique, o padrão que está dentro do formulário é enviar o formulário
  quando usamos o event.preventDefault(), o formulário não é enviado */

   event.preventDefault()
   
   /* Pega-se o documento e faz uma pesquisa pelo seletor de #inputNumber */
   const inputNumber = document.querySelector("#inputNumber")


   /* Aqui acontece a troca de telas usando DOM, trocando a classe "hide", que esconde uma das telas */
   /* O comando que pega o valor é inputNumber.value */

   if(Number(inputNumber.value) == randomNumber) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

  /* Trocando o h2, na parte da 2º Tela */
        document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas!`
   }

   inputNumber.value = "" 
   xAttempts++
  }


/* Vamos aos Eventos */

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

/* Uso da função: Toda vez que eu clickar estou passando um CALLBACK */

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function() {
  screen1.classList.remove('hide')
  screen2.classList.add('hide')

})





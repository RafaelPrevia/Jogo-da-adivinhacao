1. DOM

> Document Object Model 
Modelagem do documento como objeto JavaScript 

> Representação do HTML em objetos JavaScript 
Atributos (propriedades) e métodos (funcionalidades) 

> Criado pelo navegador (browser) 
É uma interface (API) usada no navegador

*Pra que serve?* 

>JavaScript usa a DOM para se conectar ao HTML 
DOM não é o JavaScript 

>Manipular o HTML com JavaScript 
Modificar o HTML, os estilos e até disparar ações

*Dev Tools*

>Observaremos a DOM usando o Dev Tools, com suas ferramentas

// Objeto global presente em qualquer página no navegador
 window  
 
// Representação do documento 
 document 

2. Manipulando a DOM

As tags HTML, quando usadas pela DOM, podemos chamar de **node** (nó)

>// Pegando um elemento

const h1 = document.querySelector("h1")

>// Vários elementos (NodeList por exemplo)

const links = document.querySelectorAll("a")


3. Revisão


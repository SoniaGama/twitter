//Traer elementos del html
var container = document.getElementById('container');

//Crear Elementos
var containerTweet = document.createElement('section');
var time = document.createElement('p');

//Darles atributos a los elementos creados

//Agregar eventos
var button = document.getElementById('button');
button.addEventListener('click', showTweet);
var textarea = document.getElementById('message');
textarea.addEventListener('keyup', toDisable);//desabilitar boton


function toDisable(){
  var contador = textarea.value.length;
    console.log(contador);
  //desabilitar boton
  if (contador !== 0){
    button.disabled = false;
  }else{
    button.disabled = true;
  }
}

function clearTextarea(){
    textarea.value = '';
    textarea.setAttribute('placeholder','¿Que estas pensando?');
}

function showTweet(event){
  event.preventDefault();

  var tweet = textarea.value;//variable que guarda el mensaje del usuario

  //crear Elementos
  var tweetParagraph = document.createElement('p');
  var textTweet = tweetParagraph.innerText = tweet; //agregar el mensaje del usuario como contenido del parrafo

   //agregar hijos
   container.appendChild(containerTweet);//agregamos como hijo una seccion
   containerTweet.appendChild(tweetParagraph);//a la seccion le agregamos omo hijo el parrafo
   paragraphReference = document.getElementById('reference');
   //container.insertBefore(tweetParagraph, paragraphReference);

  clearTextarea();//agregar funcion que limpie el espacio de textarea
  toDisable();
}

//Traer elementos del html
var container = document.getElementById('container');

//Crear Elementos
var containerTweet = document.createElement('section');
var tweetParafraph = document.createElement('p');
var time = document.createElement('p');

//Darles atributos a los elementos creados
//Agregar eventos
var button = document.getElementById('button');
button.addEventListener('click', showTweet);
var textarea = document.getElementById('message');


function showTweet(){
  event.preventDefault();
  textarea.addEventListener('keyUp', enable);//desabilitar boton
  //variable que guarda el mensaje del usuario
  var tweet = textarea.value;
  //agregar el mensaje del usuario como contenido del parrafo
   var textTweet = tweetParafraph.innerText = tweet;
   //agregar hijos
   container.appendChild(containerTweet);//agregamos como hijo una seccion
   containerTweet.appendChild(tweetParafraph);//a la seccion le agregamos omo hijo el parrafo
   console.log(tweet.length);
   //var accountant = tweet.length;
  //desabilitar boton
  //agregar funcion que limpie el espacio de textarea
   clearTextarea();
}

function enable(){
  //desabilitar boton si se pasa de caracteres
  var contador = textarea.value.length;
  if (contador > 140 || contador === 0){
    button.disabled = true;
  }else {
    button.disabled = false;
  }
}

function clearTextarea(){
    textarea.value = '';
}

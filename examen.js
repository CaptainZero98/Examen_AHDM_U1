var nomUsuariojs=document.getElementById("nomUsuario");
var descImajs=document.getElementById("descIma");
var urlImajs=document.getElementById("urlIma");
var saltoLinea=document.createElement("br");
var lineaHorizontal=document.createElement("hr");
var i=0;
var f = new Date();
var fechaActual=f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
var cuentaCom=0;



function capturaUsuario(){
if (nomUsuariojs.value!=""||descImajs.value!=""||urlImajs.value!="") {

var seccionjs=document.createElement("div");
seccionjs.setAttribute("id","div"+i);

var imgjs=document.createElement("img");
  imgjs.setAttribute("src", urlImajs.value);
 
var spanUsujs=document.createElement("span");
var textUsujs=document.createTextNode("Usuario:"+nomUsuariojs.value);	
var spanDescjs=document.createElement("span");
var textDescjs=document.createTextNode("Descripcion: "+descImajs.value);
var spanFechajs=document.createElement("span");
var textFechajs=document.createTextNode("Fecha: "+fechaActual);
var textButton=document.createTextNode("Comentarios("+cuentaCom+")");
var buttonCom=document.createElement("button");
buttonCom.setAttribute("id","btn"+i);
buttonCom.setAttribute("onclick","mostrarComentarios("+i+")");




spanUsujs.appendChild(textUsujs);
spanFechajs.appendChild(textFechajs);
spanDescjs.appendChild(textDescjs);
buttonCom.appendChild(textButton);
///////////////////////////////77
seccionjs.appendChild(imgjs);

seccionjs.appendChild(document.createElement("br"));
seccionjs.appendChild(document.createElement("br"));

seccionjs.appendChild(spanUsujs);

seccionjs.appendChild(document.createElement("br"));
seccionjs.appendChild(document.createElement("br"));

seccionjs.appendChild(spanDescjs);

seccionjs.appendChild(document.createElement("br"));
seccionjs.appendChild(document.createElement("br"));


seccionjs.appendChild(spanFechajs);

seccionjs.appendChild(document.createElement("br"));
seccionjs.appendChild(document.createElement("br"));

seccionjs.appendChild(buttonCom);

//SECCION DE COMENTARIOS

var headerCom=document.createElement("h3");
headerCom.appendChild(document.createTextNode("Comentarios: "));

var inputCom=document.createElement("input");
inputCom.setAttribute("id","inCom"+i);


var btnEnvia=document.createElement("button");
btnEnvia.appendChild(document.createTextNode("Comentar"));
btnEnvia.setAttribute("id","btnComentarios"+i);
btnEnvia.setAttribute("onclick","comentarios("+i+")");


var seccionComments=document.createElement("div");
seccionComments.setAttribute("id","divCom"+i);
seccionComments.appendChild(headerCom);
seccionComments.appendChild(document.createElement("br"));
seccionComments.appendChild(document.createElement("br"));

seccionComments.appendChild(inputCom);
seccionComments.appendChild(btnEnvia)
seccionComments.appendChild(document.createElement("br"));
seccionComments.appendChild(document.createElement("br"));

seccionComments.style.display="none";

seccionjs.appendChild(document.createElement("br"));
seccionjs.appendChild(document.createElement("br"));


seccionjs.appendChild(seccionComments);
seccionjs.appendChild(document.createElement("br"));
seccionjs.appendChild(document.createElement("br"));



//Pie de sección
seccionjs.appendChild(document.createElement("br"));
seccionjs.appendChild(document.createElement("br"));

seccionjs.appendChild(document.createElement("hr"));

document.getElementById("seccion2").appendChild(seccionjs);


/////////////////////////////////////////////////////
nomUsuariojs.value="";
descImajs.value="";
urlIma.value="";

i++;
}else{

alert("Ingresa datos validos");

}



}


function mostrarComentarios(c){

var seccionCom=document.getElementById("divCom"+c);


if (seccionCom.style.display=="none") {
seccionCom.style.display="initial";

}else{

seccionCom.style.display="none";


}
}


function comentarios(c){

var btnMuestra=document.getElementById("btn"+c);

var inputComentario=document.getElementById("inCom"+c);
var divAnexar=document.getElementById("divCom"+c);
var creaParrafo=document.createElement("p");
creaParrafo.setAttribute("class","parrafo"+c);

var texto=document.createTextNode("Comentario:   "+ inputComentario.value+"					" +fechaActual );
if (inputComentario.value!="") {

	creaParrafo.appendChild(texto);
	divAnexar.appendChild(creaParrafo);
	divAnexar.appendChild(document.createElement("br"));
	
	btnMuestra.innerHTML="Comentarios("+((document.getElementsByClassName("parrafo"+c).length))+")";
	inputComentario.value="";

}else{

	alert("No puedes introducir comentarios vacíos");
}


}
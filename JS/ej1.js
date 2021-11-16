const list= document.querySelectorAll('.parrafo');
const contenedor = document.querySelector('.container');
const len = list.length;
const boton = document.querySelector('.btnChange')
var i = 0;
var cont = 0;

//1-------------------------------
for (; i < len; i++) {
  list[i].style.background = "lightblue";
}

//2-------------------------------
for (let i = 0; i < list.length; i++) {
  cont += list[i].innerHTML.split(" ").length;
}
console.log("total palabras: "+cont);
const h1 = document.createElement("h1");
h1.innerText = "Total de palabras: "+cont;
contenedor.appendChild(h1);

//3-------------------------------
document.addEventListener("click", e =>{
  if (e.target.matches("a")){
    e.preventDefault();
    console.log(e.target);
    document.body.insertAdjacentText("beforebegin",e.target.href);
  }
});

//4-------------------------------
const imagen = document.createElement("img");
imagen.setAttribute("src", "./img.jpg")
document.body.appendChild(imagen);

//5-------------------------------
function hideImg(){
  if (imagen.style.display === "none") {
    imagen.style.display = "block";
  } else {
    imagen.style.display = "none";
  }
}

//6-------------------------------
function AddLi(str){
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(str))
  li.innerHTML += '<button onclick="this.parentNode.remove()">Borrar</button>'; //opcion para quitar el li
  document.getElementById("out").appendChild(li);
}

//7 -------------------------------
const h2 = document.createElement('h2');
const f = new Date();
const fecha = (f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
console.log(fecha);
h2.innerText = "Hola! como estas? hoy es: "+fecha;
contenedor.appendChild(h2);

//8-------------------------------
const contenedor400 = document.getElementById('container400');
const btn1 = document.querySelector('.button1');
const btn2 = document.querySelector('.button2');

contenedor400.style.width="400px";
contenedor400.style.height="400px";

function changeColor(){
  if (contenedor400.style.background === "none") {
    contenedor400.style.background = "red";
  } else {
    contenedor400.style.background = "none";
  }
}

btn1.onclick = function(e) {
  console.log('BOTON 1');
  e.stopPropagation();
}

btn2.onclick = function(e) {
  console.log('BOTON 2');
  e.stopPropagation();
}

//9 -------------------------------
const form = document.createElement("form");
form.setAttribute('method',"post");

const user = document.createElement("input"); //input usuario
user.setAttribute('type',"text");
user.setAttribute('name',"usuario");
user.setAttribute('placeholder',"usuario");

const enviar = document.createElement("input"); //input mail
enviar.setAttribute('type',"password");
enviar.setAttribute('value',"Contraseña");
enviar.setAttribute('placeholder',"usuario");

const btnSubmit =  document.createElement("input");
btnSubmit.setAttribute('type', 'button');
btnSubmit.setAttribute('value', 'submit');
btnSubmit.setAttribute('name', 'Ingesar');

form.appendChild(user);
form.appendChild(enviar);
form.appendChild(btnSubmit);

document.body.appendChild(form);



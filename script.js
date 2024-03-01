var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
const btnCopiar = document.querySelector(".btn-copiar");
var munieco = document.querySelector(".contenedormunieco");
var contenedor = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");
var contenedoresult = document.querySelector(".contenedor-resultado");
var contenedorCopiar = document.querySelector(".contenedor-copiar");
var text = document.querySelector(".contenedorcajatexto textarea");
var alerta = document.querySelector(".alerta p");
botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
  var cajatexto = recuperarTexto();
  if (cajatexto.length === 0) {
    swal("Ooops!", "Debes ingresar un texto", "warning");
    return;
  } else if (cajatexto !== cajatexto.toLowerCase()) {
    alerta.classList.add("error");

    setTimeout(() => {
      alerta.classList.remove("error");
    }, 3000);
    return;
  }
  ocultarAdelante();
  resultado.textContent = encriptarTexto(cajatexto);

  botonEncriptar.classList.add("presionado");
  botonEncriptar.value = "Encriptado";
  setTimeout(() => {
    botonEncriptar.value = "Encriptar";
    botonEncriptar.classList.remove("presionado");
  }, 1000);

  contenedoresult.style.display = "block";
  contenedorCopiar.style.display = "block";
  botonDesencriptar.disabled = true;
}

function desencriptar() {
  var cajatexto = recuperarTexto();
  if (cajatexto.length === 0) {
    swal("Ooops!", "Debes ingresar un texto", "warning");
    return;
  } else if (cajatexto !== cajatexto.toLowerCase()) {
    alerta.classList.add("error");
    setTimeout(() => {
      alerta.classList.remove("error");
    }, 3000);
    return;
  }

  ocultarAdelante();
  resultado.textContent = desencriptarTexto(cajatexto);

  botonDesencriptar.classList.add("presionado");
  botonDesencriptar.value = "Desencriptado";
  setTimeout(() => {
    botonDesencriptar.value = "Desencriptar";
    botonDesencriptar.classList.remove("presionado");
  }, 1000);
  contenedoresult.style.display = "block";
  contenedorCopiar.style.display = "block";
}

function recuperarTexto() {
  var cajatexto = document.querySelector(".cajatexto");
  return cajatexto.value;
}

function ocultarAdelante() {
  munieco.classList.add("ocultar");
  contenedor.classList.add("ocultar");
}
function mostrarAdelante() {
  munieco.classList.add("mostrar");
  contenedor.classList.add("mostrar");
}

const diccionario = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

function encriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal = "";

  for (var i = 0; i < texto.length; i++) {
    if (diccionario.hasOwnProperty(texto[i])) {
      textoFinal = textoFinal + diccionario[texto[i]];
    } else {
      textoFinal = textoFinal + texto[i];
    }
  }
  return textoFinal;
}

function desencriptarTexto(mensaje) {
  var texto = mensaje;
  var textoFinal = "";

  for (var i = 0; i < texto.length; i++) {
    if (diccionario.hasOwnProperty(texto[i])) {
      textoFinal = textoFinal + texto[i];
      i = i + diccionario[texto[i]].length - 1;
    } else {
      textoFinal = textoFinal + texto[i];
    }
  }

  return textoFinal;
}

btnCopiar.addEventListener("click", () => {
  var contenido = resultado.textContent;
  navigator.clipboard.writeText(contenido);

  // Agregar clase de CSS para el efecto visual
  btnCopiar.classList.add("presionado");
  // Cambiar el texto del botón a "Copiado"
  btnCopiar.value = "Copiado";

  // Eliminar la clase después de 1 segundo
  setTimeout(() => {
    btnCopiar.value = "Copiar";
    btnCopiar.classList.remove("presionado");
  }, 1000);
});

// text.addEventListener("input", function () {
//   if (text.value === "") {
//     contenedoresult.style.display = "none";
//     contenedorCopiar.style.display = "none";
//     munieco.classList.remove("ocultar");
//     contenedor.classList.remove("ocultar");
//     munieco.classList.remove("mostrar");
//     contenedor.classList.remove("mostrar");
//   }
// });

text.addEventListener("keyup", function () {
  if (text.value === "") {
    contenedoresult.style.display = "none";
    contenedorCopiar.style.display = "none";
    munieco.classList.remove("ocultar");
    contenedor.classList.remove("ocultar");
    munieco.classList.remove("mostrar");
    contenedor.classList.remove("mostrar");
    botonDesencriptar.disabled = true;
  } else if (resultado.value === text.value) {
    botonDesencriptar.removeAttribute("disabled");
  } else {
    botonDesencriptar.disabled = true;
  }
});

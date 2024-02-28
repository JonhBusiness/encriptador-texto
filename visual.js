document.addEventListener("DOMContentLoaded", function () {
  // Selecciona el checkbox
  var checkbox = document.getElementById("fondo");
  // var caja = document.querySelector(".cajatexto");
  // var cajatexto = document.querySelector(".contenedorcajatexto");
  var p = document.querySelector(".alerta p");
  var text = document.querySelector(".contenedorcajatexto textarea");

  // Cambia el color de fondo del body cuando el estado del checkbox cambia
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      // caja.style.color = "#0a3871";
      document.body.style.background = "linear-gradient(to bottom, #d4ddef, #c6d3ef, #b7c9ef, #a9c0ee, #9ab6ee)";
      // cajatexto.style.background = "none";
      p.style.color = "#495057";
      // text.className = "textarea";
      text.className = "cajatexto";
      text.style.background = "transparent";
    } else {
      document.body.style.background = "linear-gradient(to bottom, #3359a3, #25467f, #1a335d, #11213d, #070f1f)";
      text.style.background = "white";
      p.style.color = "#9ab6ee";
      // text.className = "estilo";
      text.classList.add("estilo");
    }
  });
});

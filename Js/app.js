"use strict";

window.addEventListener("load", () => {
  var imagen1 = document.querySelector("#imagen1");
  var imagen2 = document.querySelector("#imagen2");

  $(document).ready(function () {
    $("#btnguardar").click(function () {
      if ($("#nombre").val() != "") {
        if ($("#apellido").val() != "") {
          var datos_usuario = $("#formPrincipal").serialize();
          $.ajax({
            type: "POST",
            url: "php/insertar.php",
            data: datos_usuario,
            success: function (respuesta) {
              if (respuesta == 1) {
                alert("Datos guardados exitosamente");
                imagen1.style.display = "none";
                imagen2.style.display = "none";
              } else {
                alert("Error al guardar datos, por favor intente nuevamente");
              }
            },
          });
        } else {
          alert("Por favor ingresar su apellido en donde aparece la letra X");
          imagen2.style.display = "inline-block";
          imagen1.style.display = "none";
        }
      } else {
        alert("Por favor ingresar su nombre en donde aparece la letra X");
        imagen1.style.display = "inline-block";
        imagen2.style.display = "none";
      }
      return false;
    });
  });
});

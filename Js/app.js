"use strict";
// Creamos el metodo 'load' para esperar quer todo el html cargue y el script pueda estar en el head.
window.addEventListener("load", () => {
  // Llamamos las imagenes con el querySelector para mostrarlas al no ingresar nada
  var imagen1 = document.querySelector("#imagen1");
  var imagen2 = document.querySelector("#imagen2");
  // creamos la sintaxis basica de jquery para llamar el metodo ajax
  $(document).ready(function () {
    // creamos la funcion para cuando demos click en el boton de guardar y confirmamos si los 2 campos tienen caracteres
    // en los input
    $("#btnguardar").click(function () {
      if ($("#nombre").val() != "") {
        if ($("#apellido").val() != "") {
          var datos_usuario = $("#formPrincipal").serialize();
          $.ajax({
            //Creamos la sintaxis basica del ajax y en la url seleccionamos el archivo php
            type: "POST",
            url: "php/insertar.php",
            data: datos_usuario,
            // al completar correctamente el metodo de php aparecera la alerta de guardado exitosamente de lo contrario
            // aparecera la de intentar nuevamente por error en el servidor
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
          // empleamos la alerta de que faltan campos por llenar y mostramos una imagen en el campo que hace falta para 
          // que el usuario localice el error facilmente
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

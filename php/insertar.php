<?php
    // Creamos la conexion con el servidor con sus respectivos parametros
    $conexion=mysqli_connect('localhost','root','','prueba');
    //Mandamos a llamar los campos que almacenaron los datos
    $nombre=$_POST['nombre'];
    $apellido=$_POST['apellido'];
    //Utilizamos el metodo insert para agregar los datos a la base de datos mysql
    $sql = "Insert into usuarios (nombre,apellido) values ('$nombre','$apellido')";
    
        echo mysqli_query($conexion,$sql);
?>
<?php
    $conexion=mysqli_connect('localhost','root','','prueba');

    $nombre=$_POST['nombre'];
    $apellido=$_POST['apellido'];

    $sql = "Insert into usuarios (nombre,apellido) values ('$nombre','$apellido')";
    
        echo mysqli_query($conexion,$sql);
?>
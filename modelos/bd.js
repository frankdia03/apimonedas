//archivo que se conecta a la base de datos 

//1. cargar libreria para operar con BD mysql
var mysql = require("mysql");

//cargar el archivo de configuracion
var configBD = require("../configuracion/bd.confing");

// crear la conexion a la BD
var conexion = mysql.createConnection({
    host: configBD.SEVIDOR,
    user: configBD.USUARIO,
    password: configBD.CLAVE,
    database: configBD.BASEDATOS
});

// abrir la conexion a la base de datos
conexion.connect((error) => {
    if (error) throw error;
    //mostrar por consola mensaje que la conexion a la base de datos fue exitosa
    console.log("Conexion exitosa a la BD de Monedas");
});


module.exports = conexion;
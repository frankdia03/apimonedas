
//llama express
const express = require('express');
//crea la applicacion express
const app= express();

//se configura el puerto
const puerto=3010

//se hace la linea par probar que esta funcionando
app.get('/', (req,res)=>{
    res.send('Servicio de BD Monedas en fucionamiento');
});

//cargar libreria para "parseo" de contenido JSON
var bodyParser = require('body-parser');
app.use(bodyParser.json());


//llama las rutas 
require("./rutas/moneda.rutas")(app);



app.listen(puerto, ()=>{
    console.log(`Serivicio de BD Monedas escuchado en http://localhost:${puerto}`);
});

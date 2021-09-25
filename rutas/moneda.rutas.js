
module.exports = (app) => {
    var monedas = require('../controladores/moneda.controlador');

    //metodo que obtiene una moneda 
    app.get("/monedas/:id", monedas.obtener);

    //metodo que obtiene una lista moneda 
    app.get("/monedas", monedas.listar);


    //metodo que actualiza(insert - update  una  moneda 
    app.post("/monedas", monedas.actualizar);

    //metodo que elimina una moneda 
    app.delete("/monedas/:id", monedas.eliminar);



}
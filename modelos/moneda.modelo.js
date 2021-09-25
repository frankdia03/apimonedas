//pide la conexion a la base de datos-- carga la libreria con la conexxion a la base de datos
var sql = require('./bd');

//constructor
var Moneda = function (moneda) {

    this.id = moneda.Id;
    this.moneda = moneda.Moneda;
    this.sigla = moneda.Sigla;
    this.simbolo = moneda.Simbolo;
    this.emisor = moneda.Emisor;
}

//metodo que obtiene un registro basado en la clave primaria
Moneda.obtener = (idMoneda, resultado) => {
    sql.query(`SELECT * FROM Moneda WHERE Id=${idMoneda};`, (err, res) => {
        // las tildes al revez se usan para cadenas de texto con parametros. se 
        //mezclan partes fijas y partes variables  

        //verificar si hubo error ejecutando la consulta
        if (err) {
            console.log("Error consultando una moneda:", err);
            resultado(err, null);
            return;
        }
            //la consulta devuelve resultado

            if(res.length){
                console.log("Moneda encontrada:", res[0]);
                resultado(null, res[0]);
                return;
        }
        // no se en encutraron registros
        resultado({tipo: "No encontrado"}, null);

    });
}

//metodo que obtiene la lista de monedas
Moneda.listar=(resultado)=>{
    sql.query('CALL spListarMonedas', (err, res) => {
        // las tildes al revez se usan para cadenas de texto con parametros. se 
        //mezclan partes fijas y partes variables  

        //verificar si hubo error ejecutando la consulta
        if (err) {
            console.log("Error consultando lista de monedas:", err);
            resultado(err, null);
            return;
        }
            //la consulta devuelve resultado

                console.log("Lista de Monedas encontrada:", res[0]);
                resultado(null, res[0]);
        });
}

//metodo que obtiene un registro basado en la clave primaria
Moneda.actualizar = (moneda, resultado) => {
    sql.query('CALL spActualizarMoneda(?????)', //consulta sql (err, res) => {
    [moneda.id, moneda.moneda, moneda.sigla, moneda.simbolo, moneda.emisor], //parametros 
    (err, res) =>{

        //verificar si hubo error ejecutando la consulta
        if (err) {
            console.log("Error actualizando moneda:", err);
            resultado(err, null);
            return;
        }

            //la consulta no affecto filas
            if(res.affectedRows==0){
                //no se encontrarobn registros
                resultado({tipo: "No encontrado"},null);
                return;
        }

        console.log("Moneda actualizada:", moneda);
        resultado(null, {moneda});

    });
}

//metodo que elimina un registro
Moneda.eliminar = (idMoneda, resultado) => {
    sql.query('DELETE * FROM Moneda WHERE Id=?', idMoneda (err, res) => {

        //verificar si hubo error ejecutando la consulta
        if (err) {
            console.log("Error eliminando la moneda:", err);
            resultado(err, null);
            return;
        
            //la consulta no afecto registyro

            if(res.affectedRows==0){
                resultado({tipo: "No encontrado"}, null);
                return;
        }
        // no se en encutraron registros
        console.log("Error eliminando la moneda:", err);
        resultado({tipo: "No encontrado"}, null);

    });
}

module.exports = Moneda;
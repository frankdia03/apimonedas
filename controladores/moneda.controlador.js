//crea una instancia de moneda importandola desde modelos
var Moneda = require('../modelos/moneda.modelo');

//se programa el metodo web para obtener una moneda
exports.obtener = (req, res) =>{
    Moneda.obtener(req.params.id, (err, data) =>{
        //verificar si no hubo error
        if(err){
            if(err.tipo=="No encontrado"){
                res.status(404).send({messaje:`No se encontro moneda con el id ${req.params.id}`});
            }
            else{
                res.status(500).send({messaje:`Error obteniendo la moneda con el id ${req.params.id}`});
            }
        }
            else{
                res.send(data);
                //se verifico si no hubo error y se devuelve el registro obtenido
                
            };
    });
}

//se programa el metodo web para listar  una moneda
exports.listar = (req, res) =>{
    Moneda.listar((err, data) =>{
        //verificar si no hubo error
        if(err){
            res.status(500).send({messaje:'Error obteniendo la lista de monedas'});
            
        }
            else{
                res.send(data);
                //se verifico si no hubo error y se devuelve el registro obtenido
                
            };
    });
}

exports.actualizar = (req, res) =>{
     //validar que la solicitud tenga datos 
    if(!req.body){
        res.status(400).send({messaje:'El contenido del mensaje debe tener information con la moneda'});
    }


    Moneda.actualizar(new Moneda(req.body),
    (err, data)=>{
        //verificar si hubo error
        if (err){
            if(err.tipo=="No encontrado"){
                res.status(404).send({messaje:'No se actualizo ninguna moneda'});
        }
        else{
            res.status(500).send({messaje:'Error actualizando la monead'});
        }

    }
    
    else{
        res.send(data);
        //se verifico si no hubo error y se devuelve el registro obtenido
        
    };
    
            
    });
}

//metodo web para eliminar una moneda
exports.eliminar = (req, res) =>{
    Moneda.eliminar(req.params.id,
    (err, data)=>{
       //verificar si hubo error
        if (err){
            if(err.tipo=="No encontrado"){
                res.status(404).send({messaje:`No se encontro la moneda con id:${req.params.id}`});
        }
        else{
            res.status(500).send({messaje:'Error eliminando la monead'});
        }

    }
    
    else{
        res.send({message:`La moneda con id:${req.params.id} fue eliminada`});
       //se verifico si no hubo error y se devuelve el registro obtenido
        
        };
    
            
    });
}
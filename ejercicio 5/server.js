const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
//le doy formato JSON
app.use(bodyParser.json());

app.post('/', (solicitud, resp) =>{
    console.log('POST');

    let cant = Object.values(solicitud.body).length;
    //valido que la cantidad de datos ingresados no sea mayor a 3 y luego valido los datos
    if(cant <= 3 && validoEntrada(solicitud.body.apellido, solicitud.body.dni, solicitud.body.nombre)){
        request.post('https://reclutamiento-14cf7.firebaseio.com/personas.json',
        {
            json: {
                "nombre": solicitud.body.nombre || "-",
                "apellido": solicitud.body.apellido,
                "dni": solicitud.body.dni
            }
        }, function(err){
            resp.send(err?'Status Code: 500':'Status Code: 201');

        }
    )
    }
    else{
        resp.send('Status Code: 400');
    }
});

// funcion para validar los datos de entrada
function validoEntrada(apellido, dni, nombre){
    if(dni && apellido){
        //expresion regular para comprobar que lo ingresado corresponda a una cadena
        let cad = new RegExp("^[A-Za-z]+$");
        if(!cad.test(apellido) || (nombre && !cad.test(nombre))){
            return false;
        }

        let dniString = dni.toString();
        //me aseguro que el dni no tenga mas de 10 caracteres.
        if(dniString.length > 10){
            return false;
        }
        
        return true;
    }
    else
        return false;
}

app.listen(3000, ()=>{
    console.log('Servidor listo, esperando peticiones en puerto 3000...')
})


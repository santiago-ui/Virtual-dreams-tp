const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/', (solicitud, resp) =>{
    console.log('POST');

    let cant = Object.values(solicitud.body).length;

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

function validoEntrada(apellido, dni, nombre){
    if(dni && apellido){
        let cad = new RegExp("^[A-Za-z]+$");
        if(!cad.test(apellido) || (nombre && !cad.test(nombre))){
            print("primer if mal");
            return false;
        }

        let dniString = dni.toString();
        if(dniString.length > 10){
            print("dni mal");
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


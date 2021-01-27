const { error } = require('console');
const { get } = require('request-promise');
const requestP = require('request-promise');

const linkBusqueda = 'https://reclutamiento-14cf7.firebaseio.com/personas.json';
//indico la peticion a realizar, en este caso GET, la uri de donde acceder y que es de formato JSON
requestP({method: 'GET', uri: linkBusqueda, json: true})
//si la solicitud es aceptada imprimo por pantalla
.then(response => {console.log(response);})
//si no se puede informo e imprimo el error
.catch(function(error){console.err(error)});
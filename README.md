# Virtual-dreams-tp
EJERCICIO 2
Las siguientes preguntas están orientadas a la comprensión del protocolo HTTP. Son agnósticas al lenguaje de programación, la idea es comprender los conceptos del estándar:
1.	¿Qué es un servidor HTTP? 
Un servidor HTTP es un programa informático que se encarga de realizar conexiones entre el mismo y el cliente. El servidor se encuentra a la espera de peticiones por parte del cliente, las cuales una vez recibidas responderá enviando el código correspondiente para que sea interpretado por el navegador.

2.	¿Qué son los verbos HTTP? Mencionar los más conocidos.
HTTP define un conjunto de métodos de petición para indicar la acción que se desea realizar para un recurso determinado, y aunque estos métodos no necesariamente tienen el nombre de un verbo (pueden ser un sustantivo) son los generalmente llamados verbos HTTP.
Los verbos más conocidos son: GET, POST, PUT, DELETE, OPTIONS Y PATCH.

3.	¿Qué es un request y un response en una comunicación HTTP? ¿Qué son los headers? 
En la comunicación HTTP el request es una petición que realiza el cliente al servidor para solicitarle que realice una acción y el response es la respuesta que hará el servidor ante la petición del cliente. Los headers contienen información adicional que es agregada a una response o request, esta información llena el contexto de lo que se envía o recibe indicando como es que quiero hacerlo. 

4.	¿Qué es un queryString? (En el contexto de una url)
Un Query String (cadena de consulta) es la parte de un localizador de recursos uniformes (URL) que contiene datos que no encaja convenientemente en una estructura de ruta jerárquica. La cadena de consulta incluye comúnmente los campos añadidos a una URL base por un navegador Web u otra aplicación cliente. Las mismas se encuentran en la URL después del símbolo ‘?’.

5.	¿Qué es el responseCode? ¿Qué significado tiene los posibles valores devueltos?
Los responseCode es un numero que indica lo que sucedió con una solicitud especifica. Sus valores son:
•	1xx: Respuestas informativas: indica que la solicitud fue recibida y se encuentra en proceso.
•	2xx: Respuestas satisfactorias: indica que la petición fue recibida, procesada y aceptada.
•	3xx: Redirecciones: indica que el usuario debe realizar acciones adicionales para completar una solicitud.
•	4xx: Errores de los clientes: estos tipos de errores están destinados para situaciones en las cuales el error fue causado por el cliente y la solicitud no pudo ser procesada.
•	5xx: Errores de los servidores: indica que el servidor fallo en completar la petición enviada.

6.	¿Cómo se envía data en un Get y cómo en un POST? 
En un POST la información se envia a través del body del HTTP Request de tal forma que la información no es visible para el usuario. El método GET envía la información codificada del usuario en el header del HTTP request, directamente en la URL, escribiéndolos en forma de parámetros luego del símbolo ‘?’ con formato de nombre = valor separando cada uno por el carácter ‘&’.

7.	¿Qué verbo http utiliza el navegador cuando accedemos a una página?
Se utiliza el método GET para acceder a una página web, ya que se solicitan los datos necesarios para mostrar la página. 

8.	Explicar brevemente qué son las estructuras de datos JSON y XML dando ejemplo de estructuras posibles.
JSON (Javascript Object Notation) es un formato popular, sencillo y ligero para el almacenamiento e intercambio de datos, que resulta fácil de leer tanto para una persona como para una computadora.
Ejemplo:
{
	“Nombre”: “Juan”,
	“Edad”: 28,
	“Aficiones”: [“Música”, “Cine”, “Tenis”],
	“Residencia”: “Madrid”
}

XML (Extensible Markup Language) es un formato de texto que sirve al igual JSON para guardar información con la diferencia que XML es más estricto en su notación y se necesita de mas tiempo para procesar los datos contenidos y transformarlos en algo utilizable por la computadora.
Ejemplo:
<persona>
	<nombres>Elsa</nombres>
	<apellidos>Zambrano</apellidos>
<fecha-de-nacimiento>
	<día>18</día>
	<mes>6</mes>
	<año>1996</año>
</fecha-de-nacimiento>
<ciudad>Pamplona</ciudad>
		</persona>

9.	Explicar brevemente el estándar SOAP
SOAP es un protocolo ligero para el intercambio de información entre un remitente y un destinatario por medio de mensaje SOAP. Estos mensajes son documentos que se encuentran en formato XML, ya que SOAP esta basado en el mismo, y se conforma de tres partes:
•	Sobre (envelope): define que hay en el mensaje y como procesarlo.
•	Reglas de codificación: expresa las instancias de tipos de datos definidos por la aplicación.
•	La convención o estilo de comunicación: el método utilizado para representar las llamadas y respuestas. 

10.	Explicar brevemente el estándar REST Full
REST (REpresentational State Transfer) es un estilo de arquitectura web para conectar varios sistemas basados en el protocolo HTTP. REST se compone de una lista de reglas que se deben cumplir en el diseño de la arquitectura de una API. Soluciona el problema de complejidad que tenía SOAP ya que los servicios y aplicaciones que podemos crear pueden ser usadas por cualquier dispositivo que entienda HTTP.
Se basa además en la siguiente serie de diseños fundamentales:
•	Un protocolo cliente/servidor sin estado: cada mensaje HTTP contiene toda la información necesaria por lo cual ni el cliente o el servidor necesitan recordar el estado de las comunicaciones.
•	Un conjunto de operaciones bien definidas: utiliza los verbos de HTTP.
•	Una sintaxis universal: cada recurso es direccionable únicamente a través de su URI.
•	El uso de hipermedios: la representación de los datos de la aplicación es en formato XML o HTML. Lo que permite navegar de un recurso a otro siguiendo solamente enlaces.

11.	¿Qué son los headers en un request? ¿Para qué se utiliza el key Content-type en un header?
Los headers en un request son los que contienen la información en formato de parámetros acerca de la solicitud realizada por el cliente. El key Content-type se utiliza para indicar que tipo de contenido será retornado. 
Ejemplo: Content-Type: text/html

---EJERCICIO 3---
la resolucion del ejercicio 3 se encuentra en el archivo ejercicio3.pdf

---EJERCICIO 4---
el ejercicio 4 se encuentra en la carpeta "/ejercicio 4"
Para su ejecucion debera:
1- abrir la consola CMD y utilizando el comando cd dirigirse a la carpeta contendora del script, ejemplo: cd "C:\ejercicio 4"
2- se deberan instalar los modulos necesarios para el correcto funcionamiento del script en caso de no estar instalados: "npm install request" y "npm install request-promise".
3- finalmente ejecutar el script desde consola escribiendo: node mostrarPersonas.js

---EJERCICIO 5 y 6---
1- antes que nada nos dirigiremos a la carpeta que contiene el script "server.js" en la carpeta ejercicio 5 de la misma manera que hicimos en el punto anterior.
2- luego instalaremos los modulos necesarios para la ejecucion del script en caso de no tenerlos ya: "npm install express", "npm install request" y "npm install body-parser".
3- ejecutamos el script server.js, escribiendo: node server.js
4- abrimos el archivo crearPersonas.html en un buscador (por mi parte lo probe en goggle chrome).
5- ingresamos los datos en caso de que lo ingresado no corresponda se imprimira el codigo 400 y en caso de haberse ejecutado correctamente tendremos el codigo 201.
6- en la consola aparece la palabra 'POST' para identificar de que la informacion fue recibida correctamente.

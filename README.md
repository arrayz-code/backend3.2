
# Servidor Express con Autenticación JWT y Operaciones CRUD

Este repositorio contiene un servidor Express que implementa autenticación JWT (JSON Web Tokens) para manejar operaciones de login y registro de usuarios, así como operaciones CRUD (Create, Read, Update, Delete) básicas utilizando MongoDB para el almacenamiento de datos.

## Requisitos

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Configuración

1. Clona este repositorio:

   git clone [https://github.com/arrayz-code/backend3.2](https://github.com/arrayz-code/backend3.2)

Instala las dependencias en ambas carpetas back3.2 y back3.2_crud-operations ejecutando el siguiente comando en cada una:



cd back3.2

npm install


cd back3.2_crud-operations

npm install

Crea un archivo .env en la raíz del proyecto back3.2 y agrega las siguientes variables de entorno:

env

MONGODB_URI=localhost

En la carpeta back3.2, ejecuta el siguiente comando para iniciar el servidor:



npm run dev

En la carpeta back3.2_crud-operations, ejecuta el siguiente comando para iniciar el servidor CRUD:

node app

## Uso

El servidor Express en la carpeta back3.2 implementa autenticación JWT para manejar las operaciones de login y registro de usuarios. Puedes enviar solicitudes HTTP a las rutas correspondientes para registrarte como usuario y autenticarte.

El servidor CRUD en la carpeta back3.2_crud-operations maneja operaciones básicas CRUD para una colección de datos en MongoDB. Puedes enviar solicitudes HTTP para crear, leer, actualizar y eliminar datos.

## Notas

Asegúrate de personalizar el archivo .env con la información correcta de tu base de datos MongoDB.
Este README proporciona una descripción básica de los servidores Express incluidos en el repositorio. Te recomendamos personalizar la información y agregar más detalles según las necesidades específicas de tu proyecto.
Recuerda que es importante manejar de forma segura las credenciales y contraseñas en entornos de producción, utilizando un sistema adecuado para gestionarlas.

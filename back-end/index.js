const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
require('dotenv').config();
const cors = require('cors');


//app.use(express.json())

/*
const {
  createContact,
  getContacts,
  findContact,
  getAllContacts
} = require('./controlers/contacts.controllers.js')*/
var corsOptions ={
  origin: 'http://localhost:3000', //PERMITO QUE LA API SE CONECTE CON ESTE SERVIDOR
  optionSuccessStatus: 200
}
app.use(cors(corsOptions));
const ContactsRoutes = require('./src/routes/contactsRoutes')
//rutas de contactos
//SE DEFINE LA RUTA DE LA API
 app.use('/contactos', ContactsRoutes)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
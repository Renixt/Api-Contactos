//llamada a la bd
//async ejecutar cosas asincrona, las libreria s de bds usan funciones asincronas

const createContact = async (req, res) => {
    try{
    console.log(req.body) //req es lo que se envia en la api, el body
    //desestructuracion
    const {nombre, numero}= req.body
    console.log(nombre,numero)
    res.status(201).send({
      status: "creado correctamentoe",
      message : "Contacto creado correctamente"
    })
    }
    catch (error){
      console.log(error)
      res.status(400).send({
        status : "NO SE CREO CONTACTO",
        message : "CONTACTO NO CREADO",
        error : error
      })
    }
  }

  const getContacts =  async(req, res) => {
    //ejecuta alguna funcion si ponemos aasync debe haber try catch
    try{
      console.log(req.params) //req es lo que se envia en la api, el body
      //destructuracion
      const {id}= req.params
      console.log(id)
      res.status(200).send({
        status: "Obtenido correctamente",
        message: "Contacto recibido",
        data: {"nombre":"Jose", "numero": 4427888600}
      }) //lo que enviamos al usuario
    }catch(error){
      
      res.status(400).send({
        status : "NO EXISTE EL CONTACTO",
        message : "Contacto inexistente",
        error : error
      })
    }
  }


  const findContact = async(req, res) => {
    try{
    console.log(req.query) //req es lo que se envia en la api, el body
    res.status(200).send({
      status : "Contactos encontrados",
      message: "Todos los contactos encontrados",
      //arreglo de json
      data : [{nombre : "Andres", numero : 4427888500},
        {nombre : "Reni", numero : 2245578966},
        {nombre : "Angi", numero : 112233568977}


      ]
    }) //lo que enviamos al usuario
    }catch(error){
      res.status(400).send({
        status : "NO se obtuvieron EL CONTACTO",
        message : " error al obtener los contactos",
        error : error
      })
    }
  }   

  const getAllContacts = async(req, res) => {
    try{
      res.status(200).send({
        status : "OK",
        message : "Mensaje obtenido correctamente",
        data : [{"nombre":"Jose", "numero": 4427888600},
          {"nombre":"Diego", "numero": 55678845600},
          {"nombre":"Sara", "numero": 4412256699},
        ]

      }) //lo que enviamos al usuario
  
    }catch(error){
      console.log(error)
      res.status(400).send({
        status : "NO SE OBTUVIERON DATOS",
        message : " error al obtener los contactos",
        error : error
      })
    }
  }

  module.exports = {
    createContact,
    getContacts,
    findContact,
    getAllContacts
  }
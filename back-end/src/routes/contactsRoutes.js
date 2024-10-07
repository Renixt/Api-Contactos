
const express=require("express");
const router = express.Router();

const{
    getAllContacts,
    getContacts,
    findContact,
    createContact
} =require('../controlers/contacts.controllers')
router.use(express.json())

//get
router.get('/', getAllContacts)

//meotod get PARAMS
router.get('/:id', getContacts)

//get query
router.get('/search', findContact)

//metodo post
router.post('/', createContact) //cuando se hace un post se llama a la funcion create contacts

module.exports=router;
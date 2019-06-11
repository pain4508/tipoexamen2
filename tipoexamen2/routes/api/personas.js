var express = require('express');
var router = express.Router();
var uuid = require('uuid/v4');
var personaCollection = [];
var personaEstruct = {

    id :0,
    nombre: '',
    correo: '',
    telefono: '',
    nota: ''
}

personaCollection.push(
    Object.assign(
        {},
        personaEstruct,
        {
            id:uuid(),
            nombre: 'Cristian Prado',
            correo: 'kmsprado2546@gmail.com',
            telefono: 'jajajajaaj',
            nota: 'Ejercicio practica para examen'

        }
    )
);

router.get('/', (req, res, next)=>{
    //Obtiene la coleccion de personas
    res.status(200).json(personaCollection);
}); //Get

router.get('/:id', (req, res, next)=>{
    res.status(403).json({"msg" : "No implement"});
});// Get one by Id

router.post('/', (req, res, next)=>{
    var newPersona = Object.assign(
        {},
        personaEstruct,
        {
            id:uuid()},
            req.body
    );
    personaCollection.push(newPersona);
    res.status(200).json(newPersona);
}); //Post

router.put('/:id', (req, res, next)=>{
    res.status(403).json({"msg" : "No implement"});
}); //Put

router.delete('/:id', (req, res, next)=>{
    res.status(403).json({"msg" : "No implement"});
});//delete
module.exports = router;
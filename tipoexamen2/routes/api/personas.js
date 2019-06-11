var express = require('express');
var router = express.Router();

var personaCollection = [];
var personaEstruct = {

    id :0,
    nombre: '',
    correo: '',
    telefono: '',
    nota: ''
}

router.get('/', (req, res, next)=>{
    res.status(403).json({"msg" : "No implement"});
}); //Get

router.get('/:id', (req, res, next)=>{
    res.status(403).json({"msg" : "No implement"});
});// Get one by Id

router.post('/', (req, res, next)=>{
    res.status(403).json({"msg" : "No implement"});
}); //Post

router.put('/:id', (req, res, next)=>{
    res.status(403).json({"msg" : "No implement"});
}); //Put

router.delete('/:id', (req, res, next)=>{
    res.status(403).json({"msg" : "No implement"});
});//delete
module.exports = router;
"use strict";

var express = require("express");
const model = require("../models/model");

var router = express.Router();
module.exports = router;


const models = require("../models/model");



// escriban sus rutas acá
// siéntanse libres de dividir entre archivos si lo necesitan

router.get('/houses', (req, res)=>{
  
   res.send(models.listHouses())
    
})

router.post('/houses', (req, res)=>{
    res.json (models.addHouse(req.body.house))
    
})

router.get('/characters', (req,res)=>{
    res.send(models.listCharacters())
})
router.post('/characters', (req, res)=>{
    const {name,lastName,house,dateOfBirth,isMuggle } = req.body
    let response= models.addCharacter(name, lastName, house,dateOfBirth,isMuggle)
   if(response.name){
       res.send(response)
   }else{
       res.status(404).send(response)
   }
    
    
})

router.get('/characters/:houseName', (req, res)=>{ // no dio
    var house= req.params.houseName
    var fullName= req.query.fullName
console.log(fullName)


   res.send(models.listCharacters(house, fullName))

    

})

router.get('/spells', (req,res) =>{// por query se envia el hechizo
    var {name}= req.query
   res.send(models.showSpells(name)) 
})

router.post('/spells', (req,res)=>{
    const { name, id, spellName, description}= req.body
   res.status(201).send( models.addSpell(name, id, spellName, description))
})

router.get('/wand', (req, res)=>{
    res.json(models.showWand(req.body.name))
})

router.post('/wand', (req,res)=>{
     const { name, wood, core,length}= req.body
     res.status(201).json(models.addWand(name,wood,core,length))
})

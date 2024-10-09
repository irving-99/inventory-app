const express = require('express');
const router = express.Router();
const {Item} = require('../models');
const { Sequelize, Op} = require('sequelize');

// GET all items
router.get('/', async (req, res, next) => {
    try{
        const search = req.query.search
        let items;
        if(search){
            console.log(search);
            items = await Item.findAll({where: {name : { [Op.like] :`%${search}%`}}})
        }else{
            items = await Item.findAll()
        }
        res.json(items)
    } catch(error){
        next(error)
    }
})

// GET one item
router.get('/:id', async (req, res, next) => {
    try{
        const id = req.params.id
        const item = await Item.findByPk(id)  
        res.json(item)
    } catch(error){
        next(error)
    }
})

router.delete('/:id', async (req,res, next)=>{
    try {
        const id = req.params.id;
        const itemToDelete = await Item.findByPk(id)
        const deletedItem = await itemToDelete.destroy();
        res.json(deletedItem)
    } catch (error) {
        next(error)
    }
    
})

router.put('/:id', async (req,res, next)=>{
    try {
        const id = req.params.id;
        const updatedData = req.body
        const item = await Item.findByPk(id)
        const updatedItem = await item.update(updatedData)
        res.json(updatedItem)
    } catch (error) {
        next(error)
    }
    
})



module.exports = router;
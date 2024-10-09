const express = require('express');
const router = express.Router();
const {Item} = require('../models')

// GET all items
router.get('/', async (req, res, next) => {
    try{
        const items = await Item.findAll()
        res.json(items)
    } catch(error){
        next(error)
    }
})



// GET one item
router.get('/:id', async (req, res, next) => {
    try{
        const id = req.params.id
        const item = Item.findByPk(id)
        res.json(item)
    } catch(error){
        next(error)
    }
})

// POST one item
router.post('/', async (req, res, next) => {
    try{
        const item = await Item.create(req.body)
        res.json(item)
    } catch(error){
        next(error)
    }
})

module.exports = router;
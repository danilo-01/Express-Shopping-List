const { json } = require('express');
const express = require('express');
const router = express.Router();
const items = require('../fakeDb')

// Gets all items
router.get('/', (req, res) => {
    return res.send(items)
})
// Adds an item to fakedb
router.post('/', (req, res) => {
    console.log(items)
    let reqItem = req.body['name'];
    for(let item of items){
        let itemName = item['name'];
        if(itemName == reqItem){
            return res.send(JSON.stringify({'message':'Sorry that item already exists!, try a PATCH request instead'}))
        }
    }
    items.push(req.body)
    return res.send(JSON.stringify({'message':'Added item!'}))
})
// Gets a specific item in fakedb
router.get('/:name', (req, res) => {

    for(let item of items){
        if(item['name'] == req.params['name']){
            return res.send(item);
        }
    }
    return res.send(JSON.stringify({'message':'Could not find item'}))
})
// Updates a specific item in fakedb
router.patch('/:name', (req, res) => {
    console.log(items);
    for(let i = 0; i < items.length; i++){
        if(items[i]['name'] == req.params['name']){
            items[i] = req.body;
            return res.send(JSON.stringify({'Added': req.body}));
        }
    }
    return res.send(JSON.stringify({'message':'Could not find item'}))
})
// Deletes a specific item in fakedb
router.delete('/:name', (req, res) => {

    for(let i = 0; i < items.length; i++){
        if(items[i]['name'] == req.params['name']){
            items.splice(i, 1);
            return res.send(JSON.stringify({'Deleted': req.body}));
        }
    }
    return res.send(JSON.stringify({'message':'Could not find item'}))
})



module.exports = router
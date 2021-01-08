const express = require('express');
const router = express.Router();

// Load database  Model
const model = require('../../model/model');

router.get('/test', (req, res) => res.send('todolist api is  working!'));

// @route GET api/todolist
// @description Get all todos
// @access Public
router.get('/', (req, res) => {
    model.find().then(todos => res.json(todos))
        .catch(err => res.status(404).json({ nodatafound: 'No Data Found!!!' }))
});
// @route GET api/todos/:id
// @description Get single todo by id
// @access Public
router.get('/:id', (req, res) => {
    model.findById(req.params.id)
        .then(todos => res.json(todos))
        .catch(err => res.status(404).json({ nodatafound: 'No Data Found!!!' }))
});
// @route GET api/todos
// @description add/save todo
// @access Public
router.post('/', (req, res) => {
    model.create(req.body)
        .then(todos => res.json({ msg: "Todo added Successfully!" }))
        .catch(err => res.status(404).json({ error: 'Unable to add this todo!' }))
})
// @route GET api/todos/:id
// @description Update todo
// @access Public
router.put('/:id', (req, res) => {
    model.findByIdAndUpdate(req.params.id, req.body)
        .then(todos => res.json({ msg: 'Update Successfully!' }))
        .catch(err => res.status(404).json({ error: 'Unable to update the Database' }))
})
// @route GET api/todos/:id
// @description Delete todo by id
// @access Public
router.delete('/:id', (req, res) => {
    model.findByIdAndRemove(req.params.id, req.body)
        .then(todos => res.json({ msg: 'Delete Successfully!' }))
        .catch(err => res.status(404).json({ error: 'Unable to Delete the Database' }))
})

module.exports = router;
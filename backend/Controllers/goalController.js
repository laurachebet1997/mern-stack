const asyncHandler = require('express-async-handler');
const Goal = require('../models/goaModels')

const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
});
const setGoals = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('please add the text field')
    }
    const goals = await Goal.create({
        text:req.body.text
    })
    res.status(200).json(goals)
});

const updateGoals = asyncHandler(async(req, res) => {
    const goals = await Goal.findById(req.params.id)
    res.status(200).json(goals)
})

const deleteGoals = asyncHandler(async (req, res) => {
    await Goal.remove(req.params.id)
    res.status(200).json(req.params.id)
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
};
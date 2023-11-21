const express=require('express')
const router=express.Router()
const Workout=require('../model/workoutmodel')
const mongoose=require('mongoose')
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deletWorkout,
    updateWorkout}=require('../controllers/workoutcontrolers')

router.get('/',getWorkouts)
router.get('/:id',getWorkout)
//post new work
router.post('/', createWorkout )
router.delete('/:id',deletWorkout )

router.patch('/:id', updateWorkout)
module.exports=router
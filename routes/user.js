const express=require('express')
const {singnupUser}=require('../controllers/usercontrollers')
const router=express.Router()


router.post('/login',()=>{})
router.post('/singnup',singnupUser)

module.exports=router